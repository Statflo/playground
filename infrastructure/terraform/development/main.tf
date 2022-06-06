terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  required_version = ">= 1.0.0"
}

provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "us"
  region = var.region_us
}

locals {
  namespace_domain = lookup(var.namespace_domain, var.region)
  stage_namespace = substr(
  local.namespace_domain,
  0,
  length(local.namespace_domain) - length(var.cluster_domain) + 1,
  )
  domain = format("%s.%s", var.name, local.namespace_domain)
}

data "aws_route53_zone" "parent_zone" {
  name         = var.cluster_domain
  private_zone = false
}

module "certificate" {
  source    = "terraform-aws-modules/acm/aws"
  version   = "~> v2.0"
  providers = { aws = aws.us }

  zone_id                   = data.aws_route53_zone.parent_zone.zone_id
  domain_name               = local.domain
  subject_alternative_names = []


  tags = merge(
  {
    "Country" = substr(var.region, 0, 2)
  },
  {
    "DataCenter" = substr(var.region, 3, length(var.region) - 5)
  },
  )
}

module "website" {
  source    = "git::https://github.com/cloudposse/terraform-aws-s3-website.git?ref=0.15.7"

  enabled              = true
  delimiter            = "."
  namespace            = local.namespace_domain
  name                 = var.name
  hostname             = local.domain
  versioning_enabled   = "true"
  cors_allowed_methods = tolist(["GET", "HEAD"])
  index_document       = "index.html"
  error_document       = "index.html"
  deployment_arns      = {}

  tags = merge(
  {
    "Country" = substr(var.region, 0, 2)
  },
  {
    "DataCenter" = substr(var.region, 3, length(var.region) - 5)
  },
  )
}

module "cdn" {
  source    = "git::https://github.com/cloudposse/terraform-aws-cloudfront-cdn.git?ref=0.15.3"

  enabled                         = true
  delimiter                       = "."
  namespace                       = local.namespace_domain
  name                            = var.name
  origin_domain_name              = module.website.s3_bucket_domain_name
  price_class                     = "PriceClass_All"
  aliases                         = [local.domain]
  dns_aliases_enabled             = "true"
  parent_zone_id                  = data.aws_route53_zone.parent_zone.zone_id
  acm_certificate_arn             = module.certificate.this_acm_certificate_arn
  origin_protocol_policy          = "http-only"
  viewer_protocol_policy          = "redirect-to-https"
  viewer_minimum_protocol_version = "TLSv1.1_2016"
  default_root_object             = "index.html"
  allowed_methods                 = tolist(["GET", "HEAD", "OPTIONS"])
  cached_methods                  = tolist(["GET", "HEAD", "OPTIONS"])
  custom_error_response = [
    {
      error_code            = 400
      error_caching_min_ttl = 300
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_code            = 404
      error_caching_min_ttl = 300
      response_code         = 200
      response_page_path    = "/index.html"
    },
  ]

  tags = merge(
  {
    "Country" = substr(var.region, 0, 2)
  },
  {
    "DataCenter" = substr(var.region, 3, length(var.region) - 5)
  },
  )
}
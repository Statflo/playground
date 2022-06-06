# CA Specific Outputs
output "region" {
  value = var.region
}

output "distribution_id" {
  value = module.cdn.cf_id
}

output "bucket_domain_name" {
  value = module.website.s3_bucket_domain_name
}

output "bucket_hostname" {
  value = module.website.hostname
}

## US Specific Outputs
#output "region_us" {
#  value = var.region_us
#}
#
#output "distribution_id_us" {
#  value = module.cdn_us.cf_id
#}
#
#output "bucket_domain_name_us" {
#  value = module.website_us.s3_bucket_domain_name
#}
#
#output "bucket_hostname_us" {
#  value = module.website_us.hostname
#}

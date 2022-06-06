variable "region" {
  type        = string
  description = "AWS Subnet Region"
}

variable "region_us" {
  type        = string
  description = "AWS Subnet Region for US"
}

variable "name" {
  type        = string
  description = "Service Name"
}

variable "subdomains" {
  type        = list(string)
  description = "Web Domain Names"
}

variable "cluster_domain" {
  type        = string
  description = "Cluster Domain"
}

variable "namespace_domain" {
  type        = map(string)
  description = ""
}


terraform {
  backend "s3" {
    bucket  = "statflo-dev-terraform"
    key     = "standalone-repo/playground.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}


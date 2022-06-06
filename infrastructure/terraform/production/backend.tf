terraform {
  backend "s3" {
    bucket  = "tf.ca.prod.stflo.io"
    key     = "standalone-repo/playground.tfstate"
    region  = "ca-central-1"
    encrypt = true
  }
}


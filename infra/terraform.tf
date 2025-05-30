terraform {
  required_version = "~> 1.12.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.5.0"
    }
  }

  backend "s3" {
    bucket = "otetoteto-io-tfstate"
    key    = "otetoteto-io.tfstate"
    region = "auto"

    skip_credentials_validation = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_requesting_account_id  = true
    skip_s3_checksum            = true
  }
}

provider "cloudflare" {}
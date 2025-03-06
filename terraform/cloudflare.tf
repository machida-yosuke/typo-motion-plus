terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

variable "cloudflare_api_token" {}

variable "account_id" {}

variable "github_username" {}

variable "repo_name" {}

resource "cloudflare_pages_project" "example" {
  account_id        = var.account_id
  name              = var.repo_name
  production_branch = "main"

  build_config {
    build_command   = "npm run build"
    destination_dir = "dist"
  }

  source {
    type = "github"
    config {
      owner             = var.github_username
      repo_name         = var.repo_name
      production_branch = "main"
    }
  }
}
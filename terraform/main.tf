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

resource "cloudflare_pages_project" "typo_motion_plus" {
  account_id        = var.cloudflare_account_id
  name             = "typo-motion-plus"
  production_branch = "main"

  build_config {
    build_command   = "npm run build"
    destination_dir = "dist"
    root_dir        = "/"
  }

  deployment_configs {
    preview {
      environment_variables = {
        NODE_VERSION = "18"
      }
    }
    production {
      environment_variables = {
        NODE_VERSION = "18"
      }
    }
  }

  source {
    type = "github"
    config {
      owner                         = var.github_owner
      repo_name                     = "typo-motion-plus"
      production_branch            = "main"
      pr_comments_enabled          = true
      deployments_enabled          = true
      preview_deployment_setting   = "all"
      preview_branch_includes     = ["dev/*", "feature/*"]
      preview_branch_excludes     = ["main"]
    }
  }
} 
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
  required_version = ">= 0.14"

  backend "remote" {
    organization = "the-outpost"

    workspaces {
      name = "design-system"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
}

resource "aws_s3_bucket" "b" {
  bucket        = var.bucket_name
  acl           = "public-read"
  policy        = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": [
                "arn:aws:s3:::${var.bucket_name}/*",
                "arn:aws:s3:::${var.bucket_name}"
            ]
        }
    ]
}
  POLICY
  force_destroy = true

  website {
    index_document = var.index_file
    error_document = "error.html"
  }
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = abspath("../storybookDist")
}

resource "aws_s3_bucket_object" "static_files" {
  for_each = module.template_files.files

  bucket       = aws_s3_bucket.b.bucket
  key          = each.key
  content_type = each.value.content_type
  source       = each.value.source_path
  content      = each.value.content
  etag         = each.value.digests.md5
}

resource "aws_route53_record" "bucket" {
  zone_id = var.hosted_zone_id
  name    = "design"
  type    = "CNAME"
  ttl     = "300"
  records = ["${aws_s3_bucket.b.bucket}.${aws_s3_bucket.b.website_domain}"]
}

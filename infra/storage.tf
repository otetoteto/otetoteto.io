resource "cloudflare_r2_bucket" "this" {
  account_id = var.cloudflare_account_id
  name       = "otetoteto-io-images"
  location   = "APAC"
}

resource "cloudflare_dns_record" "storage" {
  comment = "画像配信用ドメイン"
  content = "public.r2.dev"
  name    = "image.otetoteto.io"
  proxied = true
  ttl     = 1
  type    = "CNAME"
  zone_id = var.cloudflare_zone_id
}


resource "cloudflare_r2_custom_domain" "this" {
  account_id  = var.cloudflare_account_id
  zone_id     = var.cloudflare_zone_id
  bucket_name = cloudflare_r2_bucket.this.name
  domain      = "image.otetoteto.io"
  enabled     = true
  min_tls     = "1.2"
}

resource "cloudflare_r2_bucket_cors" "this" {
  account_id  = var.cloudflare_account_id
  bucket_name = cloudflare_r2_bucket.this.name
  rules = [{
    allowed = {
      methods = ["GET"]
      origins = ["https://otetoteto.io"]
      headers = ["*"]
    }
    id = "Allow CORS for otetoteto.io"
    },
    {
      allowed = {
        methods = ["GET"]
        origins = ["http://localhost:4321"]
        headers = ["*"]
      }
      id = "Allow CORS for local development"
  }]
}
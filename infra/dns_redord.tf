resource "cloudflare_dns_record" "this" {
  content  = "100::"
  name     = "otetoteto.io"
  proxied  = true
  ttl      = 1
  type     = "AAAA"
  zone_id  = "e77e06168a8bfc08eb4332ecf5ac08d8"
  settings = {}
}
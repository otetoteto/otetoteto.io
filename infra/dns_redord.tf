resource "cloudflare_dns_record" "this" {
  content  = "100::"
  name     = "otetoteto.io"
  proxied  = true
  ttl      = 1
  type     = "AAAA"
  zone_id  = var.cloudflare_zone_id
  settings = {}
}
# DNS for AI Discovery (DNS-AID / RFC 9460) Configuration

To pass the **DNS-AID** discovery check, you must publish DNS records at your authoritative DNS provider (e.g., **Cloudflare**, **AWS Route 53**, **Namecheap**, or **GoDaddy**) for `fiversesystems.com`.

The scanner validates DNS-AID records via DNS-over-HTTPS (`https://cloudflare-dns.com/dns-query` with fallback to `https://dns.google/resolve`).

---

## 1. Quick Copy-Paste DNS Records (Cloudflare / Standard DNS Dashboard)

In your DNS dashboard (e.g., Cloudflare DNS > Records), add these records:

### Record 1: Agent-to-Agent (A2A) Endpoint
- **Type**: `HTTPS` (or `SVCB`)
- **Name**: `_a2a._agents`
- **Priority**: `1`
- **Target**: `.`
- **Parameters / Value**: `alpn="h2,h3"`

### Record 2: Primary AI Discovery Index
- **Type**: `HTTPS` (or `SVCB`)
- **Name**: `_index._agents`
- **Priority**: `1`
- **Target**: `.`
- **Parameters / Value**: `alpn="h2,h3"`

### Record 3: MCP Server Discovery
- **Type**: `HTTPS` (or `SVCB`)
- **Name**: `_mcp._agents`
- **Priority**: `1`
- **Target**: `.`
- **Parameters / Value**: `alpn="h2,h3"`

### Record 4: ARD Catalog Fallback (TXT Record)
- **Type**: `TXT`
- **Name**: `_catalog._agents`
- **Value**: `url=https://fiversesystems.com/.well-known/ai-catalog.json`

---

## 2. BIND Zone File Format (If using raw zone files)

```dns
; ==============================================================================
; DNS-AID Records for fiversesystems.com
; ==============================================================================
_index._agents.fiversesystems.com.   3600  IN  HTTPS  1 . alpn="h2,h3"
_a2a._agents.fiversesystems.com.     3600  IN  HTTPS  1 . alpn="h2,h3"
_mcp._agents.fiversesystems.com.     3600  IN  HTTPS  1 . alpn="h2,h3"
_skills._agents.fiversesystems.com.  3600  IN  HTTPS  1 . alpn="h2,h3"
_catalog._agents.fiversesystems.com. 3600  IN  TXT    "url=https://fiversesystems.com/.well-known/ai-catalog.json"
```

---

## 3. Enable DNSSEC (Required by DNS-AID Specification)

In your DNS provider dashboard (e.g., **Cloudflare > DNS > DNSSEC**):
1. Click **Enable DNSSEC**.
2. Copy the DS record (Key Tag, Algorithm, Digest Type, Digest).
3. Paste it into your domain registrar (where you purchased the domain).
4. Save. Validating resolvers will now return the authenticated `AD` flag.

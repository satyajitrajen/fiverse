# DNS for AI Discovery (DNS-AID / RFC 9460) Configuration

This document specifies the DNS Resource Records (RR) required for DNS-based AI Agent Discovery according to the [DNS-AID IETF Draft](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) and [RFC 9460 (SVCB / HTTPS Resource Records)](https://www.rfc-editor.org/rfc/rfc9460).

---

## 1. Required DNS Resource Records (BIND / Zone File Format)

Add these records to the authoritative DNS zone for `fiversesystems.com`:

```dns
; ==============================================================================
; DNS-AID: DNS for AI Discovery Records for fiversesystems.com
; ==============================================================================

; 1. Primary AI Resource Discovery Index (ARD Manifest)
_index._agents.fiversesystems.com.   3600  IN  HTTPS  1 . (
    alpn="h2,h3"
    endpoint="https://fiversesystems.com/.well-known/ai-catalog.json"
)

; 2. Agent-to-Agent (A2A) Interaction Endpoint
_a2a._agents.fiversesystems.com.     3600  IN  HTTPS  1 . (
    alpn="h2,h3"
    endpoint="https://fiversesystems.com/api/v1/inquiries"
)

; 3. Model Context Protocol (MCP) Server Discovery
_mcp._agents.fiversesystems.com.     3600  IN  HTTPS  1 . (
    alpn="h2,h3"
    endpoint="https://fiversesystems.com/.well-known/mcp/server-card.json"
)

; 4. Agent Skills RFC v0.2.0 Discovery Index
_skills._agents.fiversesystems.com.  3600  IN  HTTPS  1 . (
    alpn="h2,h3"
    endpoint="https://fiversesystems.com/.well-known/agent-skills/index.json"
)
```

---

## 2. Cloudflare DNS / Web UI Configuration

If managing DNS via Cloudflare, AWS Route 53, or Namecheap:

| Record Type | Name | Priority | Target | Value / Parameters |
| :--- | :--- | :--- | :--- | :--- |
| **HTTPS** | `_index._agents` | `1` | `.` | `alpn="h2,h3" endpoint="https://fiversesystems.com/.well-known/ai-catalog.json"` |
| **HTTPS** | `_a2a._agents` | `1` | `.` | `alpn="h2,h3" endpoint="https://fiversesystems.com/api/v1/inquiries"` |
| **HTTPS** | `_mcp._agents` | `1` | `.` | `alpn="h2,h3" endpoint="https://fiversesystems.com/.well-known/mcp/server-card.json"` |
| **HTTPS** | `_skills._agents` | `1` | `.` | `alpn="h2,h3" endpoint="https://fiversesystems.com/.well-known/agent-skills/index.json"` |

---

## 3. DNSSEC Signing

Ensure DNSSEC is enabled on the registrar/nameserver (e.g. Cloudflare 1-Click DNSSEC) so validating resolvers receive authenticated `AD` (Authenticated Data) flags on DNS-AID queries.

### Verification with `dig`:
```bash
dig +dnssec HTTPS _index._agents.fiversesystems.com
```

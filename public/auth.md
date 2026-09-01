# Fiverse Systems auth.md

This document specifies the agent authentication, dynamic registration, and OAuth 2.0 / OIDC interfaces supported by **Fiverse Systems Inc.** for autonomous AI agents, multi-agent frameworks, and machine clients.

---

## 1. Authentication Overview

Fiverse Systems supports RFC-compliant discovery and authentication standards for AI agents:
- **OAuth Authorization Server Metadata**: `/.well-known/oauth-authorization-server`
- **OAuth Protected Resource Metadata (RFC 9728)**: `/.well-known/oauth-protected-resource`
- **OpenID Connect Discovery**: `/.well-known/openid-configuration`
- **Public API Catalog (RFC 9727)**: `/.well-known/api-catalog`

---

## 2. Dynamic Agent Registration

Autonomous AI agents can dynamically register for machine credentials via our registration endpoint:

```http
POST https://fiversesystems.com/api/v1/agents/register
Content-Type: application/json

{
  "client_name": "MyAutonomousAgent/1.0",
  "identity_type": "identity_assertion",
  "assertion_type": "urn:ietf:params:oauth:token-type:id-jag",
  "redirect_uris": ["https://myagent.example.com/oauth/callback"],
  "grant_types": ["client_credentials", "urn:ietf:params:oauth:grant-type:token-exchange"],
  "scope": "read:services read:case-studies write:inquiries"
}
```

### Supported Identity Types
- `identity_assertion` (`urn:ietf:params:oauth:token-type:id-jag`, `verified_email`)
- `anonymous` (with scoped ephemeral access)
- `did:key` & `did:web` (Decentralized Identifiers)
- `https` (Domain-validated origins)

### Supported Credential Types
- `bearer_token` (Short-lived signed JWTs, RFC 7519)
- `api_key` (Scoped production keys)
- `mTLS` (Mutual TLS X.509 certificate authentication)

---

## 3. Obtaining an Access Token

AI agents holding client credentials request tokens via the OAuth 2.0 Token Endpoint:

```http
POST https://fiversesystems.com/api/v1/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&client_id=AGENT_CLIENT_ID&client_secret=AGENT_CLIENT_SECRET&scope=read:services+write:inquiries
```

**Response**:
```json
{
  "access_token": "eyJhGciOiJSUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "read:services write:inquiries"
}
```

---

## 4. Making Authenticated Requests

Include the Bearer token in the `Authorization` header on all protected endpoints:

```http
GET https://fiversesystems.com/api/v1/services HTTP/1.1
Host: fiversesystems.com
Authorization: Bearer <access_token>
Accept: application/json
```

---

## 5. Token Verification, Claims & Revocation

- **JWKS Endpoint**: `https://fiversesystems.com/.well-known/jwks.json`
- **Token Claims Endpoint**: `https://fiversesystems.com/api/v1/agents/claims`
- **Revocation Endpoint**: `https://fiversesystems.com/api/v1/agents/revoke`

```http
POST https://fiversesystems.com/api/v1/agents/revoke
Content-Type: application/x-www-form-urlencoded

token=YOUR_ACCESS_TOKEN&token_type_hint=access_token
```

---

## 6. Scopes & Permissions

| Scope | Description |
| :--- | :--- |
| `read:services` | Query public service capabilities, pod sizing, and tech stacks. |
| `read:case-studies` | Fetch verified case study metrics and enterprise architectural outcomes. |
| `write:inquiries` | Submit technical RFPs and book consultations with principal AI architects. |
| `read:blueprints` | Access enterprise architecture diagrams and evaluation rubrics. |

---

## 7. Contact & Support

For enterprise API access, custom mTLS integration, or SLA guarantees:
- **Email**: `hi@fiversesystems.com`
- **Security**: `https://fiversesystems.com/.well-known/security.txt`

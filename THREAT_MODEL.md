# Threat Model & Compliance (Skeleton)

This document outlines high level risk areas for the scraping platform.

## Risks

- **Abuse of scraping capabilities** – Users may violate website terms or applicable laws.
- **Data leakage** – Secrets or PII could be logged or exposed to other tenants.
- **Service abuse** – Excessive load on target websites or the platform infrastructure.

## Mitigations

- Respect `robots.txt` by default and require explicit opt-out by admins.
- Store secrets encrypted in the database and avoid logging them.
- Rate limiting and per-domain politeness delays to prevent abuse.
- RBAC to ensure users only access their own organization/project data.

This is a starting point; a full audit is required before production use.

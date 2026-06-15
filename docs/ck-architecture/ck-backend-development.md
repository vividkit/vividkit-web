# /ck:backend-development - Backend Capability Router

## Authoritative Flow

1. Resolve backend target: framework, API style, datastore, runtime, deployment context.
2. Scout existing backend conventions: modules, routes, schemas, auth, tests, deploy files.
3. Design the public contract: REST/OpenAPI, GraphQL schema, or protobuf.
4. Design data, auth, and security: schema, indexes, validation, RBAC, rate limits, secrets.
5. Implement idiomatically inside the existing backend structure.
6. Verify with risk-appropriate tests and scans.
7. Operationalize with deploy assets, health checks, logs, metrics, tracing, docs, and runbook.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Mandatory | ck:backend-development |
| Context | ck:scout |
| Planning / build | ck:plan, ck:cook |
| Verification | ck:test, ck:security, ck:debug |
| Data / deploy | ck:databases, ck:deploy |
| Tools | framework CLIs, test runners, Docker, Kubernetes, DB explain tools |

## Sub-agents

No mandatory sub-agent is declared by the capability router. In implementation flows it commonly coordinates researcher, planner, developer, tester, debugger, reviewer, and docs roles through the surrounding workflow.

## Mode Selection

| Route | Behavior |
|------|----------|
| Technology selection | Choose language, framework, DB, API style |
| API design | REST, GraphQL, or gRPC contracts |
| Auth/security | OAuth, JWT, RBAC, MFA, OWASP controls |
| Data/performance | Schema, indexes, caching, query optimization |
| Architecture | Monolith, microservices, CQRS, saga, events |
| Testing/ops | Unit/integration/E2E, CI/CD, Docker/K8s, observability |

## Complexity Routing

Small backend changes can stay in a single implementation flow. Cross-service, database, auth, or production changes need explicit contracts, rollback, and verification layers.

## Hard Gate

No backend design before stack, API style, data model, auth boundary, and deployment context are explicit. Public endpoints require validation, auth, rate limits, security headers, tests, and API contract docs. Secrets must never be exposed.

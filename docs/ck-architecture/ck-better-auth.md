# /ck:better-auth - Better Auth Setup

## Authoritative Flow

1. Detect framework, package manager, database/ORM, and existing auth/session code.
2. Choose auth methods: email/password, OAuth, passwordless, MFA, organizations, sessions.
3. Configure Better Auth server instance, adapter, providers, and plugins.
4. Generate or migrate schema after adapter and plugin selection.
5. Mount the framework API handler.
6. Create the client auth instance.
7. Wire sign-up, sign-in, sign-out, reset, verification, MFA/passkey screens, and protected routes.
8. Verify end-to-end flows and production hardening.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Mandatory | ck:better-auth |
| Context | ck:scout |
| Docs | ck:docs-seeker |
| Security / tests | ck:security, ck:test |
| Tools | Better Auth CLI, package manager, ORM migration CLI |

## Sub-agents

No mandatory sub-agent is declared. Implementation may be handled by the surrounding build workflow when this skill is used inside `/ck:cook` or `/ck:bootstrap`.

## Mode Selection

| Route | Behavior |
|------|----------|
| email/password | Built-in credential auth |
| OAuth | GitHub, Google, and social providers |
| database/ORM | Adapter setup and schema generation |
| 2FA/passkeys | Plugin setup with schema regeneration |
| organizations | Roles, invites, teams, tenants |
| production | Sessions, cookies, email callbacks, rate limits |

## Complexity Routing

Basic email/password can be narrow. OAuth, MFA/passkeys, organizations, or production hardening need schema, redirect, recovery, and security verification.

## Hard Gate

Use only for TypeScript/JavaScript apps. Resolve database/ORM before schema generation. Configure auth secret and URL without exposing values. Regenerate schema after plugin changes. OAuth requires provider credentials and redirect URL alignment.

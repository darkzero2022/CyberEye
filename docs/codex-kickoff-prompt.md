# Codex Kickoff Prompt

Open this repository and read these files first:
- AGENTS.md
- docs/product-spec.md
- docs/technical-architecture.md
- docs/implementation-roadmap.md

## Objective
Build V1 of **GRC Secure Labs**, a portfolio-driven cybersecurity learning platform for individual learners focused on:
- Security Foundations
- Threat Modeling
- Secure Design
- Practical GRC

## Locked stack
- Next.js + TypeScript
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Row Level Security
- modular monolith architecture

## Constraints
- no videos in V1
- learner and admin roles only
- content-driven architecture
- visual labs use hotspots, not free drawing
- portfolio supports summary only or summary plus selected work
- map relevant content to ISO 27001, PCI DSS, NIST, and OWASP

## Build order
1. bootstrap the real app structure
2. wire Supabase auth and session handling
3. implement the initial schema and RLS policies
4. build admin CRUD for paths, modules, and lessons
5. build learner-facing published pages
6. add quizzes and scoring next
7. add labs and portfolio after that

## Quality bar
- typed code
- validation present
- RLS considered for all new tables
- no hardcoded course content architecture
- clear commit messages and implementation notes

# AGENTS.md

## Mission

Build **GRC Secure Labs**, a portfolio-driven cybersecurity learning platform for individual learners.

Primary domains:
- Security Foundations
- Threat Modeling
- Secure Design
- Practical GRC

The platform must support:
- written lessons
- quizzes
- structured labs
- visual hotspot labs
- scoring and feedback
- progress tracking
- public portfolio artifacts
- admin content management

## Locked architectural decisions

Do not replace these decisions unless the user explicitly changes them:

- Frontend/app framework: **Next.js + TypeScript**
- Backend platform: **Supabase**
- Auth: **Supabase Auth**
- Database: **Supabase Postgres**
- Files: **Supabase Storage**
- Authorization: **Postgres Row Level Security**
- Architecture style: **modular monolith**
- Content model: **content-driven**, not hardcoded pages

## Product rules

- V1 is for **individual learners**, not enterprise teams
- No videos in V1
- Standards mapping must include:
  - ISO 27001
  - PCI DSS
  - NIST
  - OWASP
- Include security concepts and best practices throughout the content model
- Portfolio must show both:
  - completion/score signals
  - selected real work artifacts

## UX rules

- Keep the learner UI professional, modern, and clean
- Avoid childish gamification
- Prioritize clarity, progression, and portfolio value
- Visual labs in V1 must use:
  - uploaded diagrams
  - hotspots
  - predefined component selection
- Do not implement freehand diagram drawing in V1

## Engineering rules

- Use server-side scoring for quizzes and labs
- Do not trust client-side results for progress or portfolio generation
- Keep business logic out of page components when possible
- Use strong validation for admin-created content
- Prefer incremental phases over large rewrites

## Delivery phases

### Phase 1
- auth
- profiles
- paths/modules/lessons
- admin CRUD for content
- published content rendering

### Phase 2
- quizzes
- quiz scoring
- progress tracking

### Phase 3
- structured labs
- visual hotspot labs
- lab scoring
- feedback page

### Phase 4
- portfolio artifacts
- public profiles
- publish controls

### Phase 5
- standards browsing
- analytics and polish

## Definition of done

A task is not complete unless:
- code is typed
- validation is present
- role and ownership checks are present
- RLS impact is considered
- docs are updated if schema or architecture changes

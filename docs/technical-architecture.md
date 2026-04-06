# Technical Architecture

## Stack
- Next.js
- TypeScript
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Row Level Security

## Architecture style
Modular monolith.

One app, one database, one backend platform, clear domain separation.

## Domain modules
- auth
- profiles
- content
- quizzes
- labs
- scoring
- progress
- portfolio
- standards
- admin CMS

## Content-driven model
Do not hardcode courses or labs into page files.

Core content entities:
- paths
- modules
- lessons
- quizzes
- quiz_questions
- labs
- lab_tasks
- diagram_assets
- standards
- standard_items
- concepts
- best_practices
- submissions
- progress_records
- skill_records
- portfolio_artifacts

## Security model
- Supabase Auth for sign-in
- RLS on all app tables
- admin and learner roles only in V1
- server-side scoring for integrity
- Storage buckets separated for internal content and public portfolio assets

## Visual lab model
V1 visual labs use:
- uploaded diagram assets
- predefined hotspots
- component tagging/selecting
- trust-boundary selection

Do not implement freehand drawing in V1.

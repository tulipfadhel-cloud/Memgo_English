# MEMGO ENGLISH

Bilingual English Learning Management Platform for Arabic-speaking students.

## Local development

1. Copy `.env.example` to `.env`.
2. Run `npm install`.
3. Run `npx prisma migrate dev --name init`.
4. Run `npm run db:seed`.
5. Run `npm run dev` and open http://localhost:3000.

## Development demo accounts

- Admin: `admin@memgo.local`
- Student: `student@memgo.local`
- Development password: `MemgoDemo123!`

These credentials are development seed data only. Never use them in production.

## Architecture

Next.js App Router, strict TypeScript, Tailwind CSS, Prisma + SQLite, local-first storage design and role-oriented application structure. Production services can later replace SQLite/local storage without changing feature boundaries.

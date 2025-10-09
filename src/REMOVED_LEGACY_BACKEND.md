# Removed Legacy Backend

This `src/` directory contained legacy Fastify backend code that was conflicting with Next.js build.

The legacy `src/index.ts` file has been removed as it was:
- Importing `fastify` which is not needed for Next.js
- Causing TypeScript compilation errors
- Not part of the Next.js App Router structure

Next.js API routes are now in `app/api/` directory (currently disabled for initial deployment).

This file serves as a placeholder to document the removal.
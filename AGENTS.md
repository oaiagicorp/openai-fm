# Contribution Guide

This project is a Next.js application that demonstrates the OpenAI text‑to‑speech API.
Follow the instructions below when contributing changes.

## Getting started

1. Install Node.js 20 or later.
2. Clone the repository and run `npm install` to install dependencies.
3. Create a `.env` file at the project root with your `OPENAI_API_KEY` (see `.env.example`).
   Database variables are optional and only needed for the sharing feature.

## Project structure

- `src/app` – Application pages and API routes. Key endpoints:
  - `api/generate/route.ts` – Proxy to OpenAI TTS.
  - `api/share/route.ts` – Share parameters via a Postgres database.
- `src/components` – UI components such as `TTSPage` and buttons.
- `src/hooks` – React hooks used across the app.
- `src/lib` – Utilities and state management. Notable files:
  - `library.ts` – Default voice presets and voice list.
  - `store.ts` – Zustand store for front‑end state.
  - `copyText.ts` – Utility to copy text to the clipboard.

## Testing your changes

Before submitting a PR, run the following commands in the project root:

```bash
npm run lint   # check code style with ESLint
npm run build  # ensure the project compiles
```

Use `npm run dev` to launch a local development server and manually verify your changes.
There are no automated tests, so visual and manual verification is encouraged.

## Commit and PR standards

- Make small, focused commits with a short summary line (preferably <72 characters).
- Include additional context in the commit body when helpful.
- Keep PRs self‑contained and clearly explain the purpose of the changes.
- Document any new environment variables or setup steps in the PR description and update
  `README.md` when applicable.

## Quality checks

1. **Code checks**: `npm run lint` and `npm run build` must succeed.
2. **Documentation**: Update relevant docs when behavior or configuration changes.
3. **Review**: Ensure new code is readable, typed, and follows existing patterns.
4. **Assets**: Optimize images and media. Do not commit generated build files or secrets.

Following these guidelines helps keep the repository healthy and makes reviews faster.

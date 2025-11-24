# Testing and Debugging — MERN App Reliability
This repo contains a small MERN-style example app used to demonstrate testing and debugging practices for ensuring reliability. It includes client-side React code (with Cypress end-to-end tests and Jest unit/integration tests) and a simple Express server with utility functions and middleware.

## Repo structure (high level)

- `client/` — React app, Cypress e2e tests, and client unit tests.
- `server/` — Express server, middleware, and server-side tests.
- `tests/` — shared test setup and integration tests.
- `coverage/`, `lcov-report/` — test coverage output.

## Quick start

1. Install dependencies for both root and server/client as needed:

   - Root (optional): run `npm install` in repo root to manage workspace scripts.
   - Server: `cd server && npm install`
   - Client: `cd client && npm install`

2. Run tests

   - Server unit/integration tests: `cd server && npm test`
   - Client unit tests: `cd client && npm test`
   - Cypress e2e (client): `cd client && npx cypress open` or run headless with `npx cypress run`.

3. View coverage

   - After running tests, open `coverage/lcov-report/index.html` to browse coverage results.

## Notes about tests

- Unit tests use Jest. Integration tests cover API routes and middleware.
- E2E tests use Cypress and live against the client (optionally with a running server).
- There are sample tests and helpers under `client/src/tests` and `server/src`.



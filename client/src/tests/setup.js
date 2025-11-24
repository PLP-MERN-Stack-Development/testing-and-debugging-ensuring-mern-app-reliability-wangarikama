// client/src/tests/setup.js

// This file is often used for client tests to import jest-dom
// and set up global mocks (like msw server handlers).

require('@testing-library/jest-dom');

// Example: Setting up global MSW handlers for client tests
// import { server } from './msw_server_file';
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
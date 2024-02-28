import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '9r74xr',
  e2e: {
    baseUrl: 'http://localhost:4174',
    supportFile: false,
    excludeSpecPattern: ['*/*/**/screenshot.cy.ts'],
  },
});

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173/',
    fileServerFolder: 'dist',
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// This is the Vercel Serverless Function entry point for the backend API.
// It imports and re-exports the Express app from the server folder.
const app = require('../server/index.js');

module.exports = app;

// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files (if any) from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Example API route (replace with your real routes)
app.get('/api/status', (req, res) => {
  res.json({ message: 'VeilMatch Beta API is running' });
});

// Root route for browser access
app.get('/', (req, res) => {
  res.send('VeilMatch Beta is live!');
});

// Catch-all to serve index.html for frontend routes (React, etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server (Vercel provides PORT env, local uses 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ VeilMatch Beta running on port ${PORT}`);
});

// Export app for Vercel
module.exports = app;

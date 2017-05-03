const express = require('express');
const { resolve } = require('path');

const app = express();

app.use(express.static(resolve(__dirname, '..')));

// Anything not covered by API routes is sent the index.html file
app.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '..', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500).send(err);
});

app.listen(1990, () => {
  console.log('Server is listening on port 1990');
});

module.exports = app;

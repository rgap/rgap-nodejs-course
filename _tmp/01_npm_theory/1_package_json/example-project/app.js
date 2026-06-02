const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the package.json manifest example! Entry point is app.js.');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

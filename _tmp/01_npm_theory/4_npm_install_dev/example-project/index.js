const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Running production dependency: express is active!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export app
module.exports = app;

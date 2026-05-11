const express = require('express');
const path = require('path');

const app = express();
const PORT = 8081;

app.get('/api/info', (req, res) => {
  res.json({ baseImage: process.env.BASE_IMAGE || 'unknown' });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`CNDIT welcome app listening on http://localhost:${PORT}`);
});

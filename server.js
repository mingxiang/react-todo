const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next();
  }
});
app.use(express.static('public')); // expose folder to server

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`);
});

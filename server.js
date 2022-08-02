const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
  const path = resolve('/index.html');
  res.sendFile(path);
});


app.listen(process.env.PORT || 3000, () => console.log('Node server listening on port 3000!'));

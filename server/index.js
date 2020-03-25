const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public/dist')));
let port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
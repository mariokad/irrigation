const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 5000);

// middlewear
app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser.json());

module.exports = app;
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(express.static("" + __dirname + "/dist", { maxAge: 0 }));
app.listen(process.env.PORT || 5000);
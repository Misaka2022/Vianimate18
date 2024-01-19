"use strict";

var express = require('express');

var app = express();

var userApi = require('./userApi');

var port = 7200;
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('./user', userApi);
app.listen(port, function () {
  return console.log("Example app listening on port 7200!");
});
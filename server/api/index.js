const express = require('express');
const app = express();
const userApi = require('./userApi');
const port = 7200;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('./user', userApi);
app.listen(port, () => console.log(`Example app listening on port 7200!`));


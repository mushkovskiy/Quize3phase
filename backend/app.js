require('dotenv').config();
const app = require('express')();
const config = require('./config/configApp');

config(app);

const PORT = process.env.PORT ?? 4000;

app.listen(4000, () => console.log('gogogo'));

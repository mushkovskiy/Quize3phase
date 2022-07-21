require('dotenv').config();
const app = require('express')();
const config = require('./config/configApp');

config(app);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log('gogogo'));

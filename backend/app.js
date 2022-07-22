const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT ?? 4000;
const regRouter = require('./routers/regRouter');
const mainRouter = require('./routers/mainRouter');
// const photosRouter =require('./routes/photos.rourer');
const config = require('./config/configApp');

// config
config(app);

// routing
app.use('/', regRouter);
app.use('/main', mainRouter);
app.listen(port, () => console.log(`***Server started at ${port} port ***`));

const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT ?? 4000;
const regRouter = require('./routers/regRouter');
const mainRouter = require('./routers/mainRouter');
const questionRouter = require('./routers/questionRouter')
const resultsRouter = require('./routers/resultsRouter')
// const photosRouter =require('./routes/photos.rourer');
const config = require('./config/configApp');

// config
config(app);

// routing
app.use('/', regRouter);
app.use('/main', mainRouter);
app.use('/',questionRouter)
app.use('/results',resultsRouter)
app.listen(port, () => console.log(`***Server started at ${port} port ***`));

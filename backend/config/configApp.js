const express = require('express');

const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');
// const reactSsrMiddleware = require('../middlewares/reactSsrMiddleware');
// const getUser = require('../middlewares/getUser');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'G(8x>|Ai^"+&',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

function config(app) {
  // app.use(reactSsrMiddleware);
  app.use(express.static(path.resolve('public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  // app.use(getUser);
}

module.exports = config;

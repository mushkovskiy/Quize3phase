const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);


const config = (app) => {
  // Use
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session({
    store: new FileStore(),
    key: "user_sid",
    secret: "ne skazu" ?? 'G(8x>|Ai^"+&',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 9000000,
      httpOnly: true,
    },
  }))
  app.use(express.json());

  app.use(cors({origin:['http://localhost:3000'],credentials:true,}));
  // app.use(cors());

};

module.exports = config;

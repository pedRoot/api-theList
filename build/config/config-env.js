"use strict";

// config-env.js
var dotenv = require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,
  URL_FRONT: process.env.URL_FRONT || 'localhost:3001'
};
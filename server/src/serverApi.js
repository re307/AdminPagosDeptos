const express = require('express');
const morgan = require('morgan');

const serverApi = express();

serverApi.set('port',process.env.PORT||4000);

serverApi.use(morgan('dev'));

serverApi.use(require('./Routers/principal.router'));

module.exports = serverApi;

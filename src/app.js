'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connect to DB
mongoose.connect('mongodb+srv://matheussgsilva:Bg4h03DEZHFWIjEu@cluster0.irwcn1k.mongodb.net/test');

// Load Models
const Product = require('./models/product');
const Customer = require('./models/customer');

// Load Routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
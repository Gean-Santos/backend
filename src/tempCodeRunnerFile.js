const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    'mongodb+srv://geansantos:geansantos@cluster0-rlqes.azure.mongodb.net/bancoomnistack?retryWrites=true',
{
    useNewUrlParser:true
}); 
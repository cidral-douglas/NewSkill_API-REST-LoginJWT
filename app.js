require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true});

app.use('/user', userRouter);

app.listen(process.env.PORT, ()=>{ console.log("Running")});
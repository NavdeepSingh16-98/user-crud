require('dotenv').config();

const connectToDB = require('./config/db');

const express = require('express');
const cors = require('cors');


const userRoutes = require('./routes/userRoutes');

const app = express();



app.use(express.json());
connectToDB();

app.use(cors());

app.use('/',userRoutes)
// const User = require('./model/User1');



// app.get('/',(req,res)=>{

//     res.send('Welcome to full stack');
// })



module.exports = app;
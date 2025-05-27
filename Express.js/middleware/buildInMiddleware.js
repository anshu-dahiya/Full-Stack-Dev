//BuildIn middleware
const express = require('express');
const app = express();
const morgan = require('morgan')  //morgan is buildIn middleware


app.use(morgan('dev'));       //using middleware

app.get('/',(req,res) => {
    res.send("Home");
})

app.get('/about',(req,res) => {
    res.send("About Page");
})

app.get('/contact',(req,res) => {
    res.send("Contact Page");
})

app.listen(3000, () => {
    console.log("Server Started")
})
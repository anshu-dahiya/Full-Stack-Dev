//Own middleware is middleware made by us 
const express = require('express');
const app = express();

const logger = (req,res,next) => {       //Middleware 1 (own middleware made by us)
    console.log(`${new Date()}, Request[${req.method}], [${req.url}]`);
    next();
}

const authorize = (req,res,next) => {    //Middleware 2
    console.log("2nd Middle");
    next();
}


app.use([authorize,logger]);       //using middleware

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
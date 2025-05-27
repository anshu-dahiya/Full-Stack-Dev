const express = require('express');
const app = express();
const path = require('path');

// app.get('/',(req,res) => {
    //     res.send("<h1>Hello Wrold!</h1>") 
    // })

app.use(express.static('example'))  //This will show as home page by default
                                    //By using static() example folder all reference files will be combined itself 

app.get('/about',(req,res) => {
    res.send("<h1>About Page</h1>") 
})
app.get('/files',(req,res) => {
    res.sendFile(path.join(__dirname,'./index.html')) 
})
app.get('/jsonres',(req,res) => {
    res.json([{
        firstName: 'John',
        lastName: 'Cena'
    },
    {
        firstName: 'Cody',
        lastName: 'Rhodes'
    }])
})


app.all('*',(req,res) => {         //app.all used for all urls that are not made by us
    res.send("Page Not Found")
})


app.listen(3001,() => {
    console.log("Server is running")
})
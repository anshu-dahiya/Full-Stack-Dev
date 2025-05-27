const express = require('express');
const app = express();
const phone = require('./data.js')

app.get('/',(req,res) => {
    res.send("<h1>Home Page<h2> <a href='/api/phone'>Phone</a>")
})

app.get('/api/phone',(req,res) => {      //sending complete data
    res.send(phone);
})

app.get('/api/phone/items',(req,res) => {      //sending only ID and name
    const onlyItems = phone.map((product) => {
        const{id,name} = product;        //Destructuring
        return {id,name}
    })

    res.send(onlyItems);
})

app.get('/api/phone/:phoneID',(req,res) => {    //sending data of ID requested in url
    const {phoneID} = req.params;     //Destructuring
    console.log(req.params);
    const selectedItem = phone.find((product) => product.id === Number(phoneID))

    if(!selectedItem){
        res.status(404).send("Page Not Found....");
    }

    res.json(selectedItem);
})


app.get('/api/v1/query',(req,res) => {    //sending filter data according to (serach,limit,fromEnd) entered in url
    console.log(req.query);
    let sortedPhone = [...phone];
    const {search,limit,fromEnd} = req.query;     //destructuring

    if(search){
        sortedPhone = sortedPhone.filter((product) => {
            return product.name.toLowerCase().startsWith(search);
        })
    }

    if(limit){
        sortedPhone = fromEnd === 'true'
        ? sortedPhone.slice(-Number(limit))     //to serach from end
        : sortedPhone.slice(0, limit)
    }

    res.send(sortedPhone);
})


app.listen(3000,() => {
    console.log("Server Stared")
})
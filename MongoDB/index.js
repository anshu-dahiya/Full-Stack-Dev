const express = require('express')
const app =  express(); 
const {dbConnection} = require('./db');


//Get
app.get('/users', async(req,res) => {
    try{
        const db = await dbConnection();
        const collection =  db.collection('users');
        const users = await collection.find().toArray();
        res.json(users);

    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
})


//POST

app.use(express.json())   //Middleware to parse incoming JSON request bodies

app.post('/users', async(req,res) => {
    try{
        const db = await dbConnection();
        const collection =  db.collection('users');
        const result = await collection.insertOne(req.body);
        res.json(result);

    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
})




app.listen(3000);
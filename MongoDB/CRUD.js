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
        let result = await collection.insertOne(req.body);
        res.json(result);

    }
    catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
})



//PUT
app.put('/users/:name', async(req,res) => {
    try{
        const db = await dbConnection();
        const collection = db.collection("users");
        let singleData = await collection.updateOne({name:req.params.name},{$set:req.body});
        res.send("Updated")
        // res.json(singleData);

    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server error"});
    }
})


//Delete
app.delete('/users/:name', async(req,res) => {
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const userName = req.params.name;
        let delData = await collection.deleteOne({name:userName});
        res.send("Deleted");
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Sever error"});
    }
})


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
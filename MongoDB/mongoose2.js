const express = require('express');
const mongoose = require('mongoose');
const app = express();


//Connected to MongoDB by Mongoose
mongoose.connect('mongodb://localhost:27017/myDB')
console.log("Connected to MongoDB");

const bookSchema = new mongoose.Schema({
    title:String,
    author:String
})

const booksModal = new mongoose.model('book',bookSchema);



//GET
app.get('/books', async(req,res) => {
    try{
        const books =  await booksModal.find();
        res.json(books);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})


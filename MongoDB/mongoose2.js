const express = require('express');
const mongoose = require('mongoose');
const app = express();


//Connected to MongoDB by Mongoose
mongoose.connect('mongodb://localhost:27017/myDB')
console.log("Connected to MongoDB");

const BookSchema = new mongoose.Schema({
    title:String,
    author:String
})

const BooksModal = new mongoose.model('book',BookSchema);



//GET
app.get('/books', async(req,res) => {
    try{
        const books =  await BooksModal.find();
        res.json(books);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})


//POST
app.use(express.json())     //Middleware to parse incoming JSON request bodies

app.post('/books', async(req,res) => {
    console.log(req.body)
    try{
        const {title,author} = req.body;
        const newBook =  new BooksModal({title,author});
        await newBook.save();
        res.status(201).json(newBook);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})


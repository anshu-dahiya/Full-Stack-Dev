//Here we make seperate index.html to post the data
const express = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

let books = [
    { id:1, title:'Book 1', author:'Auhtor 1'},
    { id:2, title:'Book 2', author:'Auhtor 2'}
]    

//Get Method
app.get('/books',(req,res) => {
    res.json(books)
})

//Post Method 
app.post('/books',(req,res) => {
    console.log(req.body);
    const newBook = {
        id:books.length + 1,
        title:req.body.title,
        author:req.body.author
    };
    books.push(newBook);
    
    res.status(201).json(books);
})

app.listen(3000, () => {
    console.log("Server Started")
})
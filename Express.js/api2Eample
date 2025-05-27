//Test Post,Put,Delete of data by use of (Thunder_Client or Postman)
const express = require('express');
const app = express();

app.use(express.json())


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
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);

    res.status(201).json(books);
})


//Put Method
app.put('/books/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({error:"Book Not Found"});
    }
})


//Delete Method
app.delete('/books/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        const deletedBook = books[index];
        books.splice(index,1);   //removes exactly 1 element from books at position specified by index.
        res.json(deletedBook);
    }
    else{
        res.status(404).json({error:"Book Not Found"});
    }
})




app.listen(3000, () => {
    console.log("Server Started")
})
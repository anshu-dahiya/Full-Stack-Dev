//Set routes of bookController Methods by help of express.router 
const express = require('express');

const bookController = require('../controllers/bookController');

const router = express.Router();


router.get('/books',bookController.getBooks);
router.post('/books',bookController.createBook);
router.put('/books/:id',bookController.updatedBook);
router.delete('/books/:id',bookController.deletedBook);

module.exports = router;
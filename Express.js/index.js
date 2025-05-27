const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes')

app.use(express.json())   

app.use('/',bookRoutes);  // Mount book-related routes at the root path



app.listen(3000, () => {
    console.log("Server Started")
})
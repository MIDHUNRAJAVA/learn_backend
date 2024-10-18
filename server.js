// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require('express');
const connectDb = require('./connectDb/connectDb');
const controller = require("./controller/controller");
const cors = require("cors");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

//configure express app
// app.use(express.json());
app.use(express.json());
app.use(cors());

// Connect to the database
connectDb();

// Routing

//Landing page
app.get('/', (req, res) => {
    res.json("Welcome");
});

 //Creat a data
app.post('/notes',controller.createNote );

//Read all data 
app.get('/notes',controller.readAll )

//Read a particular data
app.get('/notes/:id',controller.readOne);

//Update a data
app.put('/notes/:id' ,controller.updateNote);

//Detete a data
app.delete('/notes/:id',controller.deleteNote);




// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

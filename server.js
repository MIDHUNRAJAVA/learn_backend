// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

// Import dependencies
const express = require('express');
const connectDb = require('./connectDb/connectDb');
const Note = require("./models/note");

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

//configure express app
// app.use(express.json());
app.use(express.json());

// Connect to the database
connectDb();

// Routing

//Landing page
app.get('/', (req, res) => {
    res.json("Welcome");
});

//Fetch all data 
app.get('/notes', async(req,res)=>{
    //Find the notes
    const notes = await Note.find();
    //Respond with them
    res.json({notes:notes});
    console.log(notes);
})

//Fetch a particular data
 app.get('/notes/:id',async (req,res)=>{
    //Get the id of the url
    const noteId = req.params.id;

    //Find the data for the id
    const note = await Note.findById(noteId);
    //respond data for the particular id 
    res.json({note:note});
 });

app.post('/notes', async (req, res) => {
    try {
        console.log(req.body);
        const title = req.body.title;
        const body = req.body.body;

        // Create a new note
        const note = await Note.create({
            title: title,
            body: body,
        });

        // Respond with the new note
        res.json({ note: note });
    } catch (error) {
        console.error('Error in POST /notes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

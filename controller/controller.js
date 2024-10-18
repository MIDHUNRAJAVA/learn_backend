const Note = require("../models/note");

const createNote = async (req, res) => {
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
}

const readAll = async(req,res)=>{
    //Find the notes
    const notes = await Note.find();
    //Respond with them
    res.json({notes:notes});
    console.log(notes);
}

const readOne = async (req,res)=>{
    //Get the id of the url
    const noteId = req.params.id;

    //Find the data for the id
    const note = await Note.findById(noteId);
    //respond data for the particular id 
    res.json({note:note});
 }

 const updateNote = async (req,res)=>{
    //Get the id from the url
    const noteId = req.params.id;

    //Get the data from the req
    const title = req.body.title;
    const body = req.body.body;

    //Find and update the record
     const updated = await Note.findByIdAndUpdate(noteId,{
        title:title,
        body:body
     },{ new: true })
     console.log(updated);

    //Respond the data 
    // const note = await Note.findById(noteId);
    res.json({note:updated});
    
}

const deleteNote = async (req,res)=>{
    //Find the id , that needs to be deleted
    const noteId = req.params.id;

    //Delte the data by using id
    await Note.deleteOne({id:noteId});

    //respond with msg
    res.json({sucesss:"deleted Sucessfully"});

}

module.exports ={
    createNote:createNote,
    readAll:readAll,
    readOne:readOne,
    updateNote:updateNote,
    deleteNote:deleteNote
}


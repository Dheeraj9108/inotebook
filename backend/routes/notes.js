const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

//rout:1get all the notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json([notes]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }

})
//route 2
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
})


//route 3:update an existing note using POST "/api/auth/updatenote".login required


router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // find the note to be updated
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not found");
        }
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
})


// route 4 : deleting an exiting note using delet ""api/notes/deletnote. Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // find the note to be deleted and delete it
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not found");
        }
        //allow deleteion only if user own it
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success ": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
})


module.exports = router
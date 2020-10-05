const express = require('express');
const router = express.Router();

//Note Model
const Note = require('../../models/Note');

// GET api/notes - get all notes
router.get('/', (req, res) => {     
    Note.find()
    .sort({ date: -1 })
    .then(notes => res.json(notes));
});

// POST api/notes - create a note
router.post('/', (req, res) => {     
   const newNote = new Note({
        title: req.body.title,
        mood: req.body.mood,
        note: req.body.note
   });
   newNote.save().then(note => res.json(note));
});

// DELETE api/notes - Delete a note
router.delete('/:id', (req, res) => {     
    Note.findById(req.params.id)
        .then(note => note.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success: false}));
 })


module.exports = router;


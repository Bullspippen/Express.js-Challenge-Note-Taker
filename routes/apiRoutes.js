const router = require('express').Router()
const notes = require('../db/notes')
const uuid = require('uuid/v1');

// GET all notes
router.get('/notes', (req, res) => {
    notes
        .getAllNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// POST a note
router.post('/notes', (req, res) => {
    const newNote = { id: uuid(), title: req.body.title, text: req.body.text };
    notes
      .addNote(newNote)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });

// DELETE a note
router.delete('/notes/:id', (req, res) => {
    notes
      .deleteNoteById(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;
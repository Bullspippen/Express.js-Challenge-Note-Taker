const router = require('express').Router()
const notes = require('../db/notes')

router.get("/notes", (req, res) => {
    notes.getAllNotes().then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

router.post()
router.delete()

module.exports = router

// adding a note
// removing a note

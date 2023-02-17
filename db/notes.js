const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    read(){
        return readFile('./db/db.json', "utf-8");
    }

    write(notes){
        return writeFile('./db/db.json', JSON.stringify(notes));
    }

    getAllNotes(){
        return this.read().then((notes) => {
            let allNotes;
            try{
                allNotes = [].concat(JSON.parse(notes));
            }
            catch(err){
                allNotes = []
            }
            return allNotes
        });
    }

    addNote(note) {
        return this.getAllNotes().then((notes) => {
          const newNotes = [...notes, note];
          return this.write(newNotes).then(() => note);
        });
    }

    deleteNoteById(id) {
        return this.getAllNotes().then((notes) => {
          const newNotes = notes.filter((note) => note.id !== id);
          return this.write(newNotes);
        });
    }
}

module.exports = new Notes();
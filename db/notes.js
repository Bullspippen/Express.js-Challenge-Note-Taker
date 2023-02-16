const util = require('util')
const fs = require('fs')
const uuid = require('uuid/v1')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

class Notes {
    read(){
        return readFile("db/db.json", "utf-8")
    }

    write(note){
        return writeFile("db/db.json", JSON.stringify(note))
    }

    getAllNotes(){
        return this.read().then((notes) => {
            let allNotes;
            try{
                allNotes = [].concat(JSON.parse(notes))
            }
            catch(err){
                allNotes = []
            }
            return allNotes
        })
    }
}

module.exports = new Notes()
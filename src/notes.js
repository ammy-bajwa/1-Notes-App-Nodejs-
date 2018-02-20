const fs = require('fs');

const getNotes = () => {
    try {
        const notesString = fs.readFileSync('./src/notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return []
    };
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {

    let notes = [];
    const note = {
        title, body
    };
    notes = getNotes();
    let duplicate = notes.filter(note => note.title !== title);
    if (duplicate.length == notes.length) {
        notes.push(note);
        saveNotes(notes)
    } else {
        return console.log('This title is already exists')
    }

};

const removeNote = (title) => {
    let notes = getNotes();
    let removedNotes = notes.filter(note => note.title !== title)
    if(removedNotes.length == notes.length){
        console.log('Not Found Match')
    }
    saveNotes(notes)
};

const readNote = (title) => {
    let notes = getNotes();
    let noteToRead = notes.filter(note => note.title === title);
    if (noteToRead.length !== 0) {
        console.log('Found');
        console.log(`Title is ${noteToRead[0].title} and body is ${noteToRead[0].body}`);
    } else {
        console.log('Not Found Match');
    }


};

const list = () => {
    let notes = getNotes();
    notes.forEach(element => {
        console.log('----');
        console.log(`Title is ${element.title}`);
        console.log(`Body is ${element.body}`);
    });
};





module.exports = {
    addNote,
    removeNote,
    readNote,
    list
}


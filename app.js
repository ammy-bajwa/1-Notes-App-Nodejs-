console.log('app is running')

const fs = require('fs');
const os = require('os');
const yarg = require('yargs');
const _ = require('lodash');
const notes = require('./src/notes.js')

const command = yarg.argv._[0].toLocaleLowerCase();

if (command == 'add') {
    notes.addNote(yarg.argv.title,yarg.argv.body);
} else if (command == 'remove') {
    notes.removeNote(yarg.argv.title);
} else if (command == 'read') {
    notes.readNote(yarg.argv.title);
} else if (command == 'list') {
    notes.list();
};




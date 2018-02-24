console.log('app is running')

const fs = require('fs');
const os = require('os');
const yarg = require('yargs');
const _ = require('lodash');
const notes = require('./src/notes.js')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  };
  const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };
  const argv = yarg
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions,
    })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;

const command = yarg.argv._[0].toLocaleLowerCase();

if (command == 'add') {
    notes.addNote(argv.title,argv.body);
} else if (command == 'remove') {
    notes.removeNote(argv.title);
} else if (command == 'read') {
    notes.readNote(argv.title);
} else if (command == 'list') {
    notes.list();
};




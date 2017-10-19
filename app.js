const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if(note) {
		console.log(
			`Note added!\n------\nTitle: ${note.title}\nBody: ${note.body}`);	 
	} 
	else {
		console.warn("Duplicate note error!");
	}
} 
else if (command === 'list') {
	let allNotes = notes.getAll();
	allNotes.forEach((note) => {
		console.log(`Title: ${note.title}
			Body: ${note.body}`);
	});
} 
else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = (noteRemoved) ? "Note successfully removed" : "No note found to remove";
	console.log(message);
} 
else if (command === 'read'){
	var note = notes.getNote(argv.title);
	var message = (note) ? 
	`Note added! \n------\nTitle: ${note.title}\nBody: ${note.body}` : "No note found";
	console.log(message);
} 
else {
	console.log('COMMAND NOT FOUND');
}

const chalk = require('chalk');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
  command: 'add',
  describe: 'add new node',
  builder: {
    title: {
      describe: 'node title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'body of node',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});
yargs.parse();

// ====================================
const fs = require('fs');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
}

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
}
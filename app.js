// const add = require('./utils');
// // const name = 'mka';
// const sum = add(4, -2);
// console.log(sum); 
// const validator = require('validator');
// console.log(validator.isURL('https://www.sdf.com')); is email also

// const msg = getNotes();
// console.log(msg);
// // -----------
// console.log(chalk.rgb(155, 200, 204).inverse('Hello!'));
// console.log(chalk.red('Hello!'));
// ----------
// nodemon is automate node refresher package help not invoke repeatedly
// -------------------------
// props of command line are in process
// console.log(process.argv[2]);
// --------------
// const command = process.argv[2];
// console.log(process.argv);
// if (command === 'add') {
//   console.log('adding note');
// } else if (command === 'remove') {
//   console.log('removing node');
// }
// console.log(process.argv);

// customize  yargs version
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');
// create add command
yargs.command({
  command: 'add',
  describe: 'add a new node',
  builder: {
    title: {
      describe: 'Node title',
      demandOption: true, //make it require to receive title
      type: 'string' //always need string to receive
    },
    body: {
      describe: 'body of node',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
})
// create remove command
yargs.command({
  command: 'remove',
  describe: 'remove new note',
  builder: {
    title: {
      describe: 'Node title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})
// list
yargs.command({
  command: 'list',
  describe: 'list nodes',
  builder: {
    title: {
      describe: 'Node title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.listNotes(argv.title);
  }
})
// read
yargs.command({
  command: 'read',
  describe: 'read new note',
  builder: {
    title: {
      describe: 'Node title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})


yargs.parse(); // equal console.log(yargs.argv);
const fs = require('fs');
const chalk = require('chalk');

// ----------------------------------------------------
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
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}
//-------------------------------------------------
const addNote = (title, body) => {
  // const duplicateNotes = notes.filter();
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('success add'));
  } else {
    console.log(chalk.bgRed('title taken'));
  }
}
// -------------------------------------------
const removeNote = title => {
  const notes = loadNotes();
  // if (notes.length > newJson.length) {}
  if (notes) {
    const newJson = notes.filter(note => note.title !== title);
    saveNotes(newJson);
    console.log(chalk.green.inverse('successful remove. '))
  } else {
    console.log(chalk.bgRed('this does not exist'));
  }
}
//---------------------------------------------
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes'));
  notes.forEach(el => {
    console.log(el.title);
  });
}
//---------------------------------------
const readNote = title => {
  const notes = loadNotes();
  const foundNode = notes.find(note => note.title === title);
  if (!foundNode) {
    console.log(chalk.bgRed('error'));
  } else {
    console.log(chalk.green('title :' + title + ',' + 'body :' + foundNode.body));
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
const fs = require('fs');

const getNotes = function () {
  return 'tour notes ....';
}
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

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note =>
    note.title === title
  )

  if (!duplicateNotes.length) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
  } else {
    console.log('title taken');
  }
}

module.exports = {
  getNotes,
  addNote
};
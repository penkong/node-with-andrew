// const add = require('./utils');
// // const name = 'mka';
// const sum = add(4, -2);
// console.log(sum); 
// const validator = require('validator');
// console.log(validator.isURL('https://www.sdf.com')); is email also

const getNotes = require('./notes');
const msg = getNotes();
console.log(msg);
// -----------
const chalk = require('chalk');
console.log(chalk.rgb(155, 200, 204).inverse('Hello!'));
console.log(chalk.red('Hello!'));
// ----------
// nodemon is automate node refresher package help not invoke repeatedly
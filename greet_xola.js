import greet from './greet.js'
import chalk from 'chalk';
import figlet from 'figlet';

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

figlet('Hello, World!', function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});
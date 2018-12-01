const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name? `, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});

// process.argv.forEach((val, index) => {
  // console.log(`${index}: ${val}`);
// });

// const args = process.argv.slice(2);

// const args = require('minimist')(process.argv.slice(2));
// args['name'];

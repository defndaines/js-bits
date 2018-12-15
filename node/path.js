const path = require('path');

const unicorn = '/Users/daines/unicorn';

console.log(path.dirname(unicorn));
console.log(path.basename(unicorn));
console.log(path.extname(unicorn));

const uni = 'unicorn';
console.log(path.join('/', 'Users', 'daines', uni));

console.log(path.resolve('path.js'));

// Will just append to current dir if doesn't exist.
console.log(path.resolve('bogus.js'));

console.log(path.resolve('/Users/daines', 'unicorn'));

console.log(path.normalize('//Users/daines/../daines/unicorn'));

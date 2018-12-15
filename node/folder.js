const fs = require('fs');

const folderName = '/tmp/test';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

const path = require('path');

fs.readdirSync(folderName);

// Get full paths.
fs.readdirSync(folderName).map(fileName => {
  return path.join(folderName, fileName);
});

// Filter out only the files.
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
};

fs.readdirSync(folderName)
  .map(fileName => path.join(folderName, fileName).filter(isFile));

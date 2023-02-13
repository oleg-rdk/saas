const _ = require('lodash');
const fs = require('fs');
const fsPromises = require('fs/promises');
const libObject = require('./lib');

const { log } = libObject;

(async () => {
  libObject.log('hello');
  // const fileContent = fs.readFileSync('./server/test.js', 'utf8');
  // fs.readFile('./server/test.js', 'utf8', (err, fileContent) => {
  //   log(fileContent);
  //
  // });

  const fileContent = await fsPromises.readFile('./server/test.js', 'utf8');

  log(fileContent);
})();

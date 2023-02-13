const log = (string) => {
  console.log(string.replace('e', 'a'));
};

const exportsObject = {
  log,
};

module.exports = exportsObject;

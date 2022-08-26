const { validateName } = require('./utils.js');
const { fillCardinalityMaps, fillModifiedSets } = require('./processor.js');

function parseLine(line) {
  const trimmedLine = String(line).trim();
  const [names] = trimmedLine.split(' -- ');
  const [lastName, firstName] = names.split(', ');
  if (lastName && firstName) {
    const validatedNames = validateName(lastName) && validateName(firstName);
    if (validatedNames) {
      fillCardinalityMaps(lastName, firstName);
      fillModifiedSets(firstName, lastName);
    }
  }
}

module.exports = { parseLine };

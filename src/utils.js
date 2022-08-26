const {
  MAXCOMMON,
  N,
} = require('./globals.js');

function mapUpsert(map, key) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  const keyCounter = map.get(key);
  map.set(key, keyCounter + 1);
}

function validateName(name) {
  const alphabeticRegex = /^[a-zA-Z]+$/;
  return alphabeticRegex.test(name);
}

function getMostCommonNames(map) {
  // the map is cast to an array an sorted using its counter value
  const sortedNames = [...map.entries()].sort((a,b) => b[1] - a[1]);
  const mostCommonArray = sortedNames.slice(0, MAXCOMMON).map((name) => `${name[0]} : ${name[1]}`);
  return mostCommonArray.join('\n');
}

function generateNewNames(lastNameSet, firstNameSet) {
  /*
  * since the selected names preserve the insert order
  * it only takes 1 modification to generate unique names
  * this will be done by taking, for example the first
  * of the elements of the last name set and inserting
  * it back to the last position, as follows
  */
  const lastNameArray = Array.from(lastNameSet);
  lastNameArray.push(lastNameArray.shift());
  const firstNameArray = Array.from(firstNameSet);
  const newNames = [];

  for (let i = 0; i < N; i++) {
    newNames.push(`${lastNameArray[i]}, ${firstNameArray[i]}`);
  }

  return newNames.join('\n');
}

module.exports = {
  mapUpsert,
  validateName,
  getMostCommonNames,
  generateNewNames,
};

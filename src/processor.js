const {
  N,
  firstNameMap,
  lastNameMap,
  fullNameSet,
  modFirstNameSet,
  modLastNameSet,
} = require('./globals.js');
const {
  mapUpsert,
  generateNewNames,
  getMostCommonNames,
} = require('./utils.js');

/*
 * In order to complete the first 3 steps, i am using 3 data structures
 * A set to store unique full names
 * A map to store unique first names
 * A map to store unique last names
*/
function fillCardinalityMaps(lastName, firstName) {
  fullNameSet.add(`${lastName}${firstName}`);
  mapUpsert(lastNameMap, lastName);
  mapUpsert(firstNameMap, firstName);
}

/*
 * In order to complete the 4th steps, i am using 2 data structures
 * A set to store unique first names
 * A set to store unique last names
 * 
 * These are only filled when:
 * No previous name in the new list has the same first name.
 * No previous name in the new list has the same last name.
 * The size of these sets are lower than N
*/
function fillModifiedSets(firstName, lastName) {
  if (modLastNameSet.size < N) {
    const firstNameExists = modFirstNameSet.has(firstName) || modLastNameSet.has(firstName);
    const lastNameExists = modLastNameSet.has(lastName) || modFirstNameSet.has(lastName);
    if (!firstNameExists && !lastNameExists) {
      modLastNameSet.add(lastName);
      modFirstNameSet.add(firstName);
    }
  }
}

function logResults() {
  console.log('1. The names cardinality for full, last, and first names:');
  console.log('Full names :', fullNameSet.size);
  console.log('Last names :', lastNameMap.size);
  console.log('First names :', firstNameMap.size);

  console.log('2. The most common last names are:');
  console.log(getMostCommonNames(lastNameMap));

  console.log('3. The most common first names are:');
  console.log(getMostCommonNames(firstNameMap));
  
  console.log('4. The new list that contains N modified names:');
  console.log(generateNewNames(modLastNameSet, modFirstNameSet));
}

module.exports = {
  fillCardinalityMaps,
  fillModifiedSets,
  logResults,
};

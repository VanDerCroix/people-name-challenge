const events = require('events');
const fs = require('fs');
const readline = require('readline');

const FILENAME = 'coding-test-data.txt';
const MAXCOMMON = 10;
const LISTMAX = 25;

const firstNameMap = new Map();
const lastNameMap = new Map();
const fullNameMap = new Set();

function mapUpsert(map, key) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  const keyCounter = map.get(key);
  map.set(key, keyCounter + 1);
}

function fillCardinalityMaps(lastName, firstName) {
  fullNameMap.add(`${lastName}${firstName}`);
  mapUpsert(lastNameMap, lastName);
  mapUpsert(firstNameMap, firstName);
}

function validateName(name) {
  const alphaExp = /^[a-zA-Z]+$/;
  return alphaExp.test(name);
}

function parseLine(line) {
  const trimmedLine = String(line).trim();
  const [names] = trimmedLine.split(' -- ');
  const [lastName, firstName] = names.split(', ');
  if (lastName && firstName) {
    const validatedNames = validateName(lastName) && validateName(firstName);
    if (validatedNames) {
      fillCardinalityMaps(lastName, firstName);
    }
  }
}

function getMostCommon(map) {
  const sortedNames = [...map.entries()].sort((a,b) => b[1] - a[1]);
  const mostCommonArray = sortedNames.slice(0, MAXCOMMON).map((name) => `${name[0]} : ${name[1]}`);
  return mostCommonArray.join('\n');
}

function logResults() {
  console.log('1. The names cardinality for full, last, and first names:');
  console.log('Full names :', fullNameMap.size);
  console.log('Last names :', lastNameMap.size);
  console.log('First names :', firstNameMap.size);

  console.log('2. The most common last names are:');
  console.log(getMostCommon(lastNameMap));

  console.log('3. The most common first names are:');
  console.log(getMostCommon(firstNameMap));
}

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(FILENAME),
      crlfDelay: Infinity
    });

    let i = 0;
    rl.on('line', parseLine);

    await events.once(rl, 'close');

    logResults();

    console.log('Reading file line by line with readline done.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

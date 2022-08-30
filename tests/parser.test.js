const test = require('ava');
const Parser = require('../src/parser');
const {
  firstNameMap,
  lastNameMap,
  fullNameSet,
  modFirstNameSet,
  modLastNameSet,
} = require('../src/globals.js');

test.serial('Should not add names to maps and sets due to invalid last name', async t => {
  rawStrLine = 'O\'Conner, Alan -- veritatis';

  Parser.parseLine(rawStrLine);

  t.deepEqual(firstNameMap.size, 0);
  t.deepEqual(lastNameMap.size, 0);
  t.deepEqual(fullNameSet.size, 0);
  t.deepEqual(modFirstNameSet.size, 0);
  t.deepEqual(modLastNameSet.size, 0);
});

test.serial('Should not add names to maps and sets due to invalid format of names', async t => {
  rawStrLine = 'Bayer María -- doloremque';

  Parser.parseLine(rawStrLine);

  t.deepEqual(firstNameMap.size, 0);
  t.deepEqual(lastNameMap.size, 0);
  t.deepEqual(fullNameSet.size, 0);
  t.deepEqual(modFirstNameSet.size, 0);
  t.deepEqual(modLastNameSet.size, 0);
});

test.serial('Should add names to maps and sets', async t => {
  rawStrLine = 'Graham, Mckenna -- ut';

  Parser.parseLine(rawStrLine);

  t.deepEqual(firstNameMap.size, 1);
  t.deepEqual(lastNameMap.size, 1);
  t.deepEqual(fullNameSet.size, 1);
  t.deepEqual(modFirstNameSet.size, 1);
  t.deepEqual(modLastNameSet.size, 1);
});

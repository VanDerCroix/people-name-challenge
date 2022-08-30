const test = require('ava');
const Utils = require('../src/utils');

test.serial('Should not add new values to the map', async t => {
  const map = new Map([
    ['Maurice', 0],
  ]);
  Utils.mapUpsert(map, 'Maurice');

  t.deepEqual(map.size, 1);
});

test.serial('Should add new values to the map', async t => {
  const map = new Map([
    ['Maurice', 0],
  ]);
  Utils.mapUpsert(map, 'Reymundo');

  t.deepEqual(map.size, 2);
});

test.serial('Should return true for valid name', async t => {
  const name = 'Jakubowski';
  const validationResponse = Utils.validateName(name);

  t.deepEqual(validationResponse, true);
});

test.serial('Should return false for valid name', async t => {
  const name = 'O\'Keefe';
  const validationResponse = Utils.validateName(name);

  t.deepEqual(validationResponse, false);
});

test.serial('Should return a string with names and ocurrences', async t => {
  const map = new Map([
    ['Maurice', 2],
    ['Gusikowski', 3],
  ]);
  const mostCommonNames = Utils.getMostCommonNames(map);
  const expectedString = 'Gusikowski : 3\nMaurice : 2';

  t.deepEqual(mostCommonNames, expectedString);
});

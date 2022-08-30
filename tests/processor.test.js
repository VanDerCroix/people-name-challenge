const test = require('ava');
const Processor = require('../src/processor');
let {
  N,
  modFirstNameSet,
  modLastNameSet,
} = require('../src/globals.js');

test.serial('Should log result of name parsing and transformations', async t => {
  Processor.logResults();

  t.pass('Result logs were printed');
});

test.serial('Should add names to modified sets', async t => {
  Processor.fillModifiedSets('Zulauf', 'Keshaun');

  t.deepEqual(modFirstNameSet.size, 1);
  t.deepEqual(modLastNameSet.size, 1);
});

test.serial('Should not add more names to modified sets', async t => {
  N = 1;
  Processor.fillModifiedSets('Zulauf', 'Keshaun');

  t.deepEqual(modFirstNameSet.size, 1);
  t.deepEqual(modLastNameSet.size, 1);
});

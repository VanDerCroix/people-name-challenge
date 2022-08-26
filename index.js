const events = require('events');
const fs = require('fs');
const readline = require('readline');
const { parseLine } = require('./src/parser.js');
const { logResults } = require('./src/processor.js');
const { FILENAME } = require('./src/globals.js');

(async function readFileLineByLine() {
  try {
    const reader = readline.createInterface({
      input: fs.createReadStream(FILENAME),
      crlfDelay: Infinity
    });

    reader.on('line', parseLine);

    await events.once(reader, 'close');

    logResults();

    console.log('\nReading file one line at the time with readline finished.');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`Approximately Memory used: ${Math.round(used * 100) / 100} MB`);
  } catch (err) {
    console.error(err);
  }
})();

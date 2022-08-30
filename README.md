### people-name-challenge

A program that processes the included example file containing people's names and outputs some statistics and generates updated data.

## Starting App

**No extra settings required**

```
git clone https://github.com/VanDerCroix/people-name-challenge.git
npm run start
```

## Unit Tests
Run unit test and print coverage report command

```
npm run test:coverage
```
Output (current coverage report)
```
  11 tests passed
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |       95 |     100 |     100 | 
 globals.js   |     100 |      100 |     100 |     100 | 
 parser.js    |     100 |      100 |     100 |     100 | 
 processor.js |     100 |       90 |     100 |     100 | 38
 utils.js     |     100 |      100 |     100 |     100 | 
--------------|---------|----------|---------|---------|-------------------
```

## Global Variables

**file src/globals.js contains all required variables**

```js
module.exports = {
  FILENAME: 'coding-test-data.txt',
  MAXCOMMON: 10,
  N: 25,
  firstNameMap: new Map(),
  lastNameMap: new Map(),
  fullNameSet: new Set(),
  modFirstNameSet: new Set(),
  modLastNameSet: new Set(),
};
```

## Input:

* An arbitrary file with the same format as the attached example file.

## Ouput:

1. The cardinality (count of unique items) of each the three sets of full, last, and first names
1. The ten most common last names sorted in descending order, including the count of these names.
1. The ten most common first names sorted in descending order, including the count of these names.
1. A list of modified names.

#### Ouput Sample:
```
1. The names cardinality for full, last, and first names:
Full names : 48418
Last names : 468
First names : 3006
2. The most common last names are:
Barton : 143
Lang : 136
Ortiz : 135
Hilll : 134
Hills : 130
Terry : 129
Becker : 128
Johns : 128
Romaguera : 128
Batz : 127
3. The most common first names are:
Tara : 32
Andreanne : 31
Stephania : 31
Keon : 31
Kaycee : 30
Milo : 29
Charlotte : 29
Kayley : 29
Dashawn : 29
Heath : 29
4. The new list that contains N modified names:
Marvin, Mckenna
McLaughlin, Garfield
Lang, Mariah
Bradtke, Agustina
Adams, Nikko
Lehner, Luis
Ortiz, Matilde
Koch, Anita
Cartwright, Berry
Fisher, Nicolas
Kunze, Elmo
Stanton, Gertrude
Runolfsdottir, Davin
Rogahn, Roy
Tromp, Colby
Hoppe, Ryley
Shanahan, Stanley
Hills, Bethel
McGlynn, Samanta
Lynch, Thad
Bahringer, Norma
Tillman, Lennie
Stoltenberg, Madison
Dickinson, Donna
Graham, Sonya
```
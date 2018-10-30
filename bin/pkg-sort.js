#!/usr/bin/env node

let projDir = process.argv.slice(2, 3)[0];
if (!projDir) {
  projDir = '.';
}
require('..')(projDir);

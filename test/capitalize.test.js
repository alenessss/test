import { strict as assert } from 'node:assert';

import capitalize from "../src/capitalize";

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
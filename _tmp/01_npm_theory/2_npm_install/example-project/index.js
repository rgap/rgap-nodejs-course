const _ = require('lodash');

const words = ['hello', 'world', 'npm', 'install', 'example'];
const chunked = _.chunk(words, 2);

console.log('Original array:', words);
console.log('Chunked array using lodash:', chunked);

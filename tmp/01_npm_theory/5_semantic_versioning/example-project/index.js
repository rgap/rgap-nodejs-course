const express = require('express');
const _ = require('lodash');
const dotenv = require('dotenv');

console.log('SemVer Example Loaded!');
console.log('Express (exact version):', express ? 'Present' : 'Absent');
console.log('Lodash (caret version range):', _ ? 'Present' : 'Absent');
console.log('Dotenv (tilde version range):', dotenv ? 'Present' : 'Absent');

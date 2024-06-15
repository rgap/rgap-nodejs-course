// This script imports the fs module and prints its contents

// The 'fs' module provides an API for interacting with the file system
const fs = require("fs");

// The 'fs' module can be used to perform file operations like reading, writing, renaming, and deleting files
// Printing the entire fs object to see its methods and properties
console.log("fs", fs);

// Another way to import the 'fs' module is using 'node:fs', which makes it explicit that this is a core Node.js module
const fsNode = require("node:fs");

// Printing the entire fsNode object to see its methods and properties
console.log("fsNode", fsNode);

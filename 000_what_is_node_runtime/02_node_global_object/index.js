// 1. Defining a property explicitly on the global object
global.myAppSecret = "NODE_COURSE_KEY_999";

// 2. Accessing the property without writing the prefix 'global'
console.log("Accessed globally without prefix: ", myAppSecret);
console.log("Accessed with global prefix:     ", global.myAppSecret);

// 3. Checking built-in functions
console.log("Are global.setTimeout and setTimeout identical?", global.setTimeout === setTimeout);
console.log("Are global.console and console identical?", global.console === console);

// 4. Checking module scope behavior
var localScopedVariable = "I am scoped only to this file module";
console.log("Is localScopedVariable attached to global?", global.localScopedVariable !== undefined);

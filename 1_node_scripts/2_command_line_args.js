// This script prints the command line arguments passed to it
// To run: node 1_command_line_args.js arg1 arg2

// Extract command-line arguments passed after the script name
const args = process.argv.slice(2);

// Print the entire process.argv array
console.log("process.argv:", process.argv);

// Print the extracted command line arguments
console.log("Command line arguments:", args);

/*
// Example input
node 1_command_line_args.js arg1 arg2 arg

// Example output
process.argv: [
    '/path/to/node',
    '/path/to/1_command_line_args.js',
    'arg1',
    'arg2',
    'arg3'
  ]
  Command line arguments: [ 'arg1', 'arg2', 'arg3' ]
*/

// This script prints the entire process object to the console.
// To run: node 1_command_line_object.js

// Assigning the process object to the args variable (redundant in this case)
const args = process;

// Printing the entire process object
console.log("process", process);

/*
Example output:

process {
  version: 'v20.9.0',                   // Node.js version
  versions: {                            // Versions of Node.js and its dependencies
    node: '20.9.0',
    v8: '11.3.244.8-node.16',            // V8 engine version
    uv: '1.46.0',                        // libuv version
    zlib: '1.2.13.1-motley',             // zlib version
    ares: '1.19.1',                      // c-ares version
    modules: '115',                      // Node.js module version
    nghttp2: '1.57.0',                   // nghttp2 version
    napi: '9',                           // N-API version
    llhttp: '8.1.1',                     // llhttp version
    openssl: '3.0.10+quic',              // OpenSSL version
  },
  arch: 'arm64',                        // Processor architecture
  platform: 'darwin',                   // Platform (e.g., 'darwin' for macOS, 'win32' for Windows, 'linux' for Linux)
  pid: 23402,                           // Process ID
  ppid: 23074,                          // Parent Process ID
  env: {                                 // Environment variables
    PATH: '/Users/rgap/.nvm/versions/node/v20.9.0/bin:/Users/rgap/.console-ninja/.bin:/opt/homebrew/Caskroom/miniforge/base/bin:/opt/homebrew/Caskroom/miniforge/base/condabin:/Users/rgap/.cargo/bin:/Users/rgap/rgap_bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/VMware Fusion.app/Contents/Public:/Library/TeX/texbin:/usr/local/share/dotnet:/Library/Apple/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Users/rgap/.cargo/bin:/usr/local/mysql-8.2.0-macos13-arm64/bin',
    HOME: '/Users/rgap',                 // Home directory of the user
    USER: 'rgap',                        // Username
    // More environment variables...
  },
  argv: [                               // Command line arguments
    '/Users/rgap/.nvm/versions/node/v20.9.0/bin/node',
    '/Users/rgap/Desktop/nodejs_curso/0_node_intro/0_node_scripts/1_command_line_object_library.js'
  ],
  execPath: '/Users/rgap/.nvm/versions/node/v20.9.0/bin/node',  // Path to the Node.js executable
  cwd: [Function: wrappedCwd],           // Function to get the current working directory
  memoryUsage: [Function: memoryUsage],  // Function to get memory usage statistics
  // Many more properties and methods...
}
*/

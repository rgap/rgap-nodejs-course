/**
 * 🧠 THEORY: process.platform
 *
 * `process.platform` returns a string identifying the operating system platform
 * on which the Node.js process is running. It’s especially useful for writing
 * cross-platform scripts (e.g., using different commands or paths in Windows vs Unix).
 *
 * Common values include:
 *   - 'win32'   → Windows
 *   - 'darwin'  → macOS
 *   - 'linux'   → Linux
 *   - 'aix', 'freebsd', 'openbsd', etc. → Other Unix flavors
 *
 * 🔍 This value is determined at build time of the Node.js binary.
 * It is not affected by runtime environment variables.
 *
 * 📦 Use Case: You might check `process.platform` to conditionally execute
 * platform-specific commands in build scripts or CLI tools.
 */

console.log("🖥️ Running on platform:", process.platform);

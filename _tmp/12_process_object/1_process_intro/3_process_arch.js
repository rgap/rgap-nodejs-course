/**
 * 🧠 THEORY: process.arch
 *
 * `process.arch` provides a string representing the processor architecture
 * that the Node.js binary was compiled for. It's important to note this may not
 * reflect the architecture of the operating system if running under emulation.
 *
 * Common values include:
 *   - 'x64'     → 64-bit systems
 *   - 'arm'     → ARM architecture (e.g., Raspberry Pi)
 *   - 'arm64'   → 64-bit ARM (e.g., Apple Silicon, newer phones)
 *   - 'ia32'    → 32-bit Intel
 *
 * 📦 Use Case: Helpful when building native modules or deploying binaries
 * that depend on specific processor features.
 *
 * 🔐 SECURITY NOTE: While `process.arch` may influence installation or deployment logic,
 * avoid relying on it alone for security-sensitive decisions.
 */

console.log("🧬 CPU architecture:", process.arch);

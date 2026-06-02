# 03_interactive_calculator: CLI & Interactive Calculator

In this hands-on project, you will combine everything you have learned about the `process` object, command-line arguments, and the `readline` module. 

Your objective is to build a hybrid terminal calculator.

---

## 1. Project Requirements

Your calculator script should support two execution modes:

### Mode A: Direct CLI Execution (Non-Interactive)
If the user passes the operation and numbers directly when launching the script, the calculator should compute the result immediately and exit.
```bash
# General Syntax: node calculator.js <operation> <num1> <num2>

node calculator.js add 10 5
# Output: Result: 10 + 5 = 15

node calculator.js divide 9 3
# Output: Result: 9 / 3 = 3
```

### Mode B: Interactive Prompting (Fallback)
If the user runs the script *without* providing all three required arguments, the script should automatically launch a guided interactive prompt using `readline` to ask for the missing values.
```bash
node calculator.js
# Output:
# === Terminal Calculator ===
# Enter first number: 10
# Enter second number: 5
# Select operation (add, subtract, multiply, divide): add
#
# Result: 10 + 5 = 15
```

---

## 2. Supported Operations
The calculator must support:
* `add` (or `+`)
* `subtract` (or `-`)
* `multiply` (or `*`)
* `divide` (or `/`)

---

## 3. Core Coding Challenges to Solve
1. **Argument Parsing**: Checking if `process.argv` contains enough inputs.
2. **Type Conversion**: Ensuring input strings are parsed into numbers (`parseFloat` or `parseInt`).
3. **Validation**:
   * Checking for invalid numbers (i.e. `isNaN`).
   * Validating that the operation matches a supported mathematical function.
   * Handling division by zero (`num2 === 0`).
4. **Clean Exit**: Ensuring the process closes cleanly in both direct and interactive modes.

---

## 4. Testing Your Solution

Test your script using both modes:

```bash
# Test Mode A: Direct CLI Execution
node calculator.js multiply 4 5

# Test Mode B: Interactive Fallback
node calculator.js
```

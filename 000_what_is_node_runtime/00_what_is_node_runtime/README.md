# 000: What is the Node.js Runtime?

Welcome to the start of your Node.js journey! Before we write or execute any code, we need to build a solid foundation. 

This guide introduces the core concepts of **JavaScript Engines** and **Runtime Environments**, and explains what Node.js is.

---

## 1. JavaScript Engines vs. Runtime Environments

To understand Node.js, we must first understand the difference between the program that compiles code and the environment it runs in.

### What is a JavaScript Engine?

Computers do not natively understand JavaScript. They only understand binary machine code (1s and 0s).

* A **JavaScript Engine** is a specialized program that takes JavaScript source code, parses it, and compiles it into machine instructions that the computer's CPU can execute.

* **Example**: Google Chrome uses an open-source engine called **V8** (written in C++). Firefox uses **SpiderMonkey**, and Safari uses **JavaScriptCore**.

### What is a Runtime Environment?

In computer science, a **Runtime Environment** is the execution environment provided to a program by the operating system or hosting platform. It provides the necessary software libraries, APIs, memory management (like garbage collection), and hardware interfaces required for the code to run. 

It is a general concept that applies to many programming languages, not just JavaScript:

* **Java**: Code runs inside the **Java Runtime Environment (JRE)** / **Java Virtual Machine (JVM)**, which translates compiled Java bytecode into machine instructions and provides a vast library of core classes.

* **Python**: Code runs inside the **Python Runtime** (usually the standard **CPython** interpreter), which parses the source files, handles memory allocation, and exposes APIs to interact with the underlying OS.

* **.NET**: Code (written in C#, F#, etc.) compiles to intermediate language (IL) and executes inside the **Common Language Runtime (CLR)**.

---

### JavaScript Runtime Environments

In JavaScript, the runtime environment acts as the "home" or container that wraps around a JavaScript Engine (like V8). The engine evaluates the syntax and runs loops/variables, but the runtime environment provides it with external tools and APIs:

* **Examples of JavaScript Runtimes**:

  1. **Web Browsers (Chrome, Safari, Firefox)**: Wrap a JavaScript engine with APIs for DOM manipulation (`document`), networking (`fetch`), and user interaction (`window`, `alert`).

  2. **Node.js**: Wraps the V8 engine with low-level operating system APIs for working with file systems (`fs`), networking (`http`), and environment management (`process`).

  3. **Deno**: A modern runtime for JavaScript and TypeScript that focuses on security and modern web standards. It uses V8 and is built in Rust.

  4. **Bun**: A high-performance, all-in-one JavaScript runtime and toolchain designed for speed. It uses Apple's JavaScriptCore engine and is built in Zig.

  5. **React Native**: A mobile application framework and runtime that allows JavaScript code to run on iOS and Android and control native user interface components.

---

## 2. What is Node.js?

JavaScript was originally created to run exclusively inside web browsers (like Netscape, Chrome, or Firefox) to make web pages interactive. In those browsers, the JavaScript engine is wrapped inside a **Browser Runtime Environment**.

In 2009, Ryan Dahl wanted to run JavaScript outside the browser—directly on a computer or server. He extracted Google Chrome's open-source **V8 Engine**, combined it with a low-level system library, and wrapped it in a C++ application.

The result was **Node.js**—a standalone runtime environment that allows you to execute JavaScript code directly on your computer, server, or IoT devices.

> [!IMPORTANT]
> **Node.js is NOT a programming language.** It is a **runtime environment** that executes JavaScript code. It is also not a framework (like Express or NestJS), but rather the foundation on which those frameworks are built.

---

## 3. Verification: Check Your Node.js Installation

Before moving forward, let's verify that the Node.js runtime is installed and accessible on your machine.

### Step 1: Open Your Terminal

Open your VS Code terminal, macOS Terminal, or Windows Command Prompt/PowerShell.

### Step 2: Query the Node.js Version

Type the following command and press `Enter`:

```bash
node -v
```

### Expected Output

You should see a version number (e.g., `v18.20.0` or `v20.11.0` or higher). 

* If you see the version number, your runtime environment is successfully installed!

* If you get a `command not found` or `node is not recognized` error, download and install Node.js (LTS version recommended) from [nodejs.org](https://nodejs.org).

---

## What's Next?

In the next folder, **`001_run_node_file`**, we will create our first physical `.js` file and execute it using the `node` command in the terminal!


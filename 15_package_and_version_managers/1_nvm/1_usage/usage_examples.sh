#!/bin/bash

# Chec current node version
node -v

# 🧪 NVM USAGE EXAMPLES

# ✅ Install a specific node version
nvm install 18.17.1

# 🟢 Use a specific version
nvm use 18.17.1

# 🏷️ Set it as default
nvm alias default 18.17.1

# 🌀 Use the version specified in .nvmrc
nvm use

# 📋 List all installed versions
nvm ls

# 🌐 List all available versions
nvm ls-remote

# 🔄 Uninstall a version
nvm uninstall 18.17.1

# 👀 Check current Node version
node -v

#!/bin/bash

# Path to the hooks directory in your repository
HOOKS_DIR="./hooks"

# Path to the .git/hooks/ directory
GIT_HOOKS_DIR=".git/hooks"

# Copy hooks from your repository to the local .git/hooks/ directory
cp "$HOOKS_DIR"/* "$GIT_HOOKS_DIR/"

#!/bin/bash

# Install dependencies using npm install instead of npm ci
echo "Installing dependencies..."
npm install --production=false

# Build the project
echo "Building project..."
npm run build

# Serve the application
echo "Starting server..."
npx serve -s build -l $PORT 
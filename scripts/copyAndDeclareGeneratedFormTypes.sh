#!/bin/bash

# WARNING: hardcoded path
sourceFile="./src/components/generated/index.js"
destinationFile="./src/components/generated/index.d.ts"

# Copy index.js to index.d.ts
cp "$sourceFile" "$destinationFile"

# Check if copy was successful
if [ $? -eq 0 ]; then
    echo "Successfully copied $sourceFile to $destinationFile"
else
    echo "Error copying $sourceFile to $destinationFile"
    exit 1
fi

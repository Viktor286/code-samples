#!/usr/bin/env bash
set -euo pipefail # Exit on error, unset vars, and failed pipes

name="world" # Assign a variable (no spaces around =)
echo "hello, $name" # Interpolate a variable in a string

if [ -f "notes.txt" ]; then # Test whether a file exists
  echo "found notes.txt"
elif [ -d "notes.txt" ]; then # Test whether it's a directory instead
  echo "notes.txt is a directory"
else
  echo "not found"
fi

for file in *.txt; do # Loop over files matching a glob
  echo "processing $file"
done

i=0
while [ "$i" -lt 3 ]; do # Loop while a condition holds
  echo "count: $i"
  i=$((i + 1))
done

read -p "Enter your name: " user_input # Prompt for and capture input
echo "you entered: $user_input"

greet() { # Define a shell function
  echo "hi, $1"
}
greet "there" # Call the function with an argument

grep "ERROR" server.log # Print lines containing "ERROR"
grep -i "error" server.log # Case-insensitive search
grep -n "ERROR" server.log # Show matching line numbers
grep -c "ERROR" server.log # Count matching lines
grep -v "DEBUG" server.log # Print lines that do NOT match
grep -r "TODO" src/ # Recursively search all files in a directory
grep -rl "TODO" src/ # List only filenames that contain a match
grep -E "error|fail" server.log # Extended regex: match either pattern
grep -w "cat" animals.txt # Match "cat" as a whole word only
grep -A 2 "Exception" server.log # Show 2 lines of context after a match
grep -B 2 "Exception" server.log # Show 2 lines of context before a match

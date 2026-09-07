ls -la | grep ".ts" # Pipe output of ls into grep
ps aux | grep node # Pipe process list into grep
cat access.log | sort | uniq -c # Pipe through sort then count duplicates
history | tail -n 20 # Pipe shell history into tail
command > out.txt # Redirect stdout to a file (overwrite)
command >> out.txt # Redirect stdout to a file (append)
command 2> errors.txt # Redirect stderr only to a file
command > out.txt 2>&1 # Redirect both stdout and stderr to one file
command < input.txt # Redirect a file's contents as stdin
command1 && command2 # Run command2 only if command1 succeeds
command1 || command2 # Run command2 only if command1 fails
command1 ; command2 # Run command2 regardless of command1's result
find . -name "*.log" | xargs rm # Pipe filenames into rm via xargs
find . -name "*.txt" | xargs grep "TODO" # Grep each piped filename
echo "one two three" | xargs -n1 echo # Run a command once per input token

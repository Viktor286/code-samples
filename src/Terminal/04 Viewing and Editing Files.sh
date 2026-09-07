cat -n script.sh # Print file contents with line numbers
less server.log # Scroll through a file page by page (q to quit)
head server.log # Show the first 10 lines of a file
head -n 25 server.log # Show the first 25 lines
tail server.log # Show the last 10 lines of a file
tail -n 50 server.log # Show the last 50 lines
tail -f server.log # Follow a file live as new lines are appended
wc server.log # Print line, word, and byte counts
wc -l server.log # Count only lines
diff old.txt new.txt # Show differences between two files
diff -u old.txt new.txt # Show differences in unified patch format
nano notes.txt # Edit a file in the nano terminal editor
vim notes.txt # Edit a file in vim (i to insert, Esc :wq to save & quit)

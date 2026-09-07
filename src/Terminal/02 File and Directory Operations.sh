touch notes.txt # Create an empty file, or update its timestamp
mkdir project # Create a new directory
mkdir -p project/src/utils # Create nested directories in one go
cp notes.txt backup.txt # Copy a file
cp -r project project-backup # Copy a directory recursively
mv notes.txt archive/notes.txt # Move or rename a file
rm backup.txt # Remove a file
rm -r project-backup # Remove a directory and its contents
rm -rf tmp-build # Force remove without prompting (use with caution)
rmdir empty-folder # Remove a directory only if it is empty
cat notes.txt # Print a file's contents to stdout
cat file1.txt file2.txt > combined.txt # Concatenate files into one
echo "hello" > greeting.txt # Overwrite a file with text
echo "again" >> greeting.txt # Append text to a file

ln -s /path/to/target link-name # Create a symbolic link
ln /path/to/target hardlink-name # Create a hard link
readlink link-name # Print the target a symlink points to
ls -l link-name # Show a symlink and its target (-> notation)
unlink link-name # Remove a symlink
stat notes.txt # Show detailed file metadata (size, dates, inode)
file notes.txt # Detect and print a file's type
md5sum notes.txt # Compute an MD5 checksum (Linux)
md5 notes.txt # Compute an MD5 checksum (macOS)
shasum -a 256 notes.txt # Compute a SHA-256 checksum
touch -m -d "2024-01-01" notes.txt # Set a file's modification date (Linux)

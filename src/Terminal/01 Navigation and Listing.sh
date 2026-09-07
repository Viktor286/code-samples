pwd # Print current working directory
cd /var/log # Change directory to an absolute path
cd .. # Move up one directory level
cd - # Jump back to the previous directory
cd ~ # Go to the home directory
ls # List files in the current directory
ls -l # Long format: permissions, owner, size, date
ls -la # Long format including hidden files (dotfiles)
ls -lh # Long format with human-readable sizes (K, M, G)
ls -lt # Sort by modification time, newest first
ls -lS # Sort by file size, largest first
ls -R # List files recursively into subdirectories
tree -L 2 # Show directory structure two levels deep
pushd /tmp # Save current dir on a stack and switch to /tmp
popd # Return to the directory saved by pushd

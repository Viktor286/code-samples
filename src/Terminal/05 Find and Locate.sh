find . -name "*.log" # Find files by name under the current directory
find . -iname "readme*" # Case-insensitive name match
find . -type d -name "node_modules" # Find directories matching a name
find . -type f -mtime -1 # Find files modified in the last 1 day
find . -type f -size +10M # Find files larger than 10 megabytes
find . -maxdepth 2 -name "*.ts" # Limit search depth to 2 levels
find . -name "*.tmp" -delete # Find and delete matching files
find . -name "*.sh" -exec chmod +x {} \; # Run a command on each match
locate httpd.conf # Fast lookup using a prebuilt file index (Linux)
which node # Show the path of an executable found in $PATH
whereis python3 # Show binary, source, and man page locations
type cd # Show whether a command is a builtin, alias, or binary

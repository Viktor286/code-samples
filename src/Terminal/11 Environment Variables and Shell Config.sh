echo $HOME # Print the value of the HOME variable
echo $PATH # Print the executable search path
env # List all environment variables
export API_KEY="secret123" # Set an environment variable for child processes
unset API_KEY # Remove an environment variable
API_KEY="secret123" node app.js # Set a variable for a single command only
export PATH="$HOME/bin:$PATH" # Prepend a directory to PATH
alias ll="ls -la" # Create a shorthand alias for a command
unalias ll # Remove an alias
source ~/.bashrc # Reload shell config in the current session
source ~/.zshrc # Reload zsh config in the current session
echo $SHELL # Show the path to the current shell
echo $?  # Print the exit code of the last command

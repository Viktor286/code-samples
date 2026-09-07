whoami # Print the current logged-in user
id # Show user ID, group ID, and group memberships
who # List users currently logged into the system
w # Show who is logged in and what they are doing
sudo apt update # Run a command with administrator privileges
sudo -i # Start an interactive root shell
su - alice # Switch to another user's login shell
passwd # Change the current user's password
useradd -m alice # Create a new user with a home directory (Linux)
userdel -r alice # Delete a user and their home directory (Linux)
usermod -aG sudo alice # Add a user to the sudo group (Linux)
groups alice # Show the groups a user belongs to

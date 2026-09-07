ls -l script.sh # Show permissions as rwxr-xr-x style string
chmod +x script.sh # Add execute permission for all
chmod -x script.sh # Remove execute permission for all
chmod 755 script.sh # rwx for owner, r-x for group and others
chmod 644 notes.txt # rw- for owner, r-- for group and others
chmod u+w,g-w file.txt # Grant owner write, revoke group write
chmod -R 755 project # Apply permissions recursively to a directory
chown alice notes.txt # Change file owner to user "alice"
chown alice:staff notes.txt # Change owner and group in one command
chgrp staff notes.txt # Change only the group
umask # Show the default permission mask for new files
umask 022 # Set default mask (new files: 644, dirs: 755)
sudo chown -R root:root /opt/app # Recursively change ownership as root

ssh-keygen -t ed25519 -C "me@example.com" # Generate a new SSH key pair
ssh-copy-id user@example.com # Copy your public key to a remote host
ssh user@example.com # Connect to a remote host over SSH
ssh -p 2222 user@example.com # Connect using a non-default port
ssh -i ~/.ssh/custom_key user@example.com # Connect using a specific key
ssh user@example.com "ls -la /var/log" # Run a single remote command
scp file.txt user@example.com:/tmp/ # Copy a local file to a remote host
scp user@example.com:/tmp/file.txt . # Copy a remote file to the local host
scp -r folder/ user@example.com:/tmp/ # Copy a directory recursively
rsync -avz folder/ user@example.com:/tmp/ # Sync a directory efficiently
ssh-add ~/.ssh/id_ed25519 # Add a key to the running ssh-agent
ssh -L 8080:localhost:80 user@example.com # Forward a local port through SSH

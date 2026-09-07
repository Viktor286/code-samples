./long-task.sh & # Run a command in the background
jobs # List background jobs in the current shell
fg # Bring the most recent background job to the foreground
fg %2 # Bring job number 2 to the foreground
bg %1 # Resume a stopped job in the background
disown %1 # Detach a job so it survives shell exit
nohup ./long-task.sh & # Run a command immune to hangups (SIGHUP)
Ctrl+Z # Suspend (pause) the current foreground job
Ctrl+C # Send SIGINT to interrupt the current foreground job
wait # Wait for all background jobs to finish
wait %1 # Wait for a specific background job to finish
screen -S build # Start a named detachable terminal session
tmux new -s build # Start a named detachable session with tmux
tmux attach -t build # Reattach to an existing tmux session

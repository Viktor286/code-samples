ps aux # List all running processes for all users
ps aux | grep node # Filter the process list by name
top # Live-updating table of processes (q to quit)
htop # Interactive process viewer (needs installing)
kill 1234 # Send SIGTERM to process ID 1234 (ask it to stop)
kill -9 1234 # Send SIGKILL to force-stop process ID 1234
killall node # Kill all processes matching a name
pkill -f "npm run dev" # Kill processes matching a command-line pattern
pgrep -f "npm run dev" # Print PIDs of processes matching a pattern
nice -n 10 ./long-task.sh # Start a process with lower scheduling priority
renice 10 -p 1234 # Change priority of an already running process
lsof -i :3000 # List processes using TCP/UDP port 3000
lsof -p 1234 # List files opened by process ID 1234

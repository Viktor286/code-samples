sed 's/foo/bar/' file.txt # Replace first "foo" with "bar" on each line
sed 's/foo/bar/g' file.txt # Replace all occurrences on each line
sed -n '2,4p' file.txt # Print only lines 2 through 4
sed '/^#/d' file.txt # Delete lines starting with "#"
sed -i 's/foo/bar/g' file.txt # Edit the file in place (GNU sed)
sed -i '' 's/foo/bar/g' file.txt # Edit in place on macOS (BSD sed needs '')
awk '{print $1}' access.log # Print the first whitespace-separated field
awk -F',' '{print $2}' data.csv # Use a comma as the field separator
awk '{print $1, $NF}' access.log # Print the first and last field
awk 'NR==3' file.txt # Print only the third line
awk '{sum += $1} END {print sum}' nums.txt # Sum a column of numbers

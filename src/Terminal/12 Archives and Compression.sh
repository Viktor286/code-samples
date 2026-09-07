tar -cf archive.tar folder/ # Create an uncompressed tar archive
tar -xf archive.tar # Extract a tar archive
tar -czf archive.tar.gz folder/ # Create a gzip-compressed tar archive
tar -xzf archive.tar.gz # Extract a gzip-compressed tar archive
tar -tzf archive.tar.gz # List contents without extracting
tar -xzf archive.tar.gz -C /tmp # Extract into a specific directory
zip -r archive.zip folder/ # Create a zip archive from a directory
unzip archive.zip # Extract a zip archive
unzip -l archive.zip # List zip contents without extracting
gzip file.txt # Compress a file to file.txt.gz (replaces original)
gunzip file.txt.gz # Decompress a .gz file

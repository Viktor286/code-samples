ping -c 4 example.com # Send 4 ICMP echo requests to a host
curl https://example.com # Fetch a URL and print the response body
curl -I https://example.com # Fetch only the response headers
curl -o out.html https://example.com # Save the response to a file
curl -X POST -d '{"a":1}' https://api.example.com # Send a POST with a body
wget https://example.com/file.zip # Download a file from a URL
ssh user@example.com # Open a secure shell on a remote host
scp file.txt user@example.com:/tmp # Copy a file to a remote host
dig example.com # Query DNS records for a domain
nslookup example.com # Look up a domain's IP address
ifconfig # Show network interfaces and IP addresses (macOS/BSD)
ip a # Show network interfaces and IP addresses (Linux)
netstat -an # List active network connections
lsof -i -P # List processes with open network connections

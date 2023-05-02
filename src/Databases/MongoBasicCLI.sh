show dbs # Show databases
use mydb # User database named "mydb"
db # Show selected database
help # Get help
show collections # Show collections from a database

db.collection.find() # Displays documents from "collection" (first 10)
it # Type "it" to see more documents after the prev command
db.collection.find(query[,fields]) # Find all documents by conditions, with optional fields selection
db.collection.findOne(query) # Find one document by conditions
db.collection.find(query).limit(n:number) # Find n document by conditions
db.collection.find().pretty() # Format results in Mongo Shell
db.collection.find().sort(key:1|-1) # Sort by key in ascending (1) or descending (-1) order
db.collection.find().skip(5) # Skip 5 documents (similar to offset)


# Start server deamon
mongod --config ~/Dev/databases/mongodb/mongod.conf

mongosh --authenticationDatabase "admin" -u "adminUser" -p "Letmemacmongo2022"

# After connection
use admin
db.auth("myUserAdmin", passwordPrompt()) # or cleartext password

# stop server via mongo shell
db.adminCommand( { shutdown: 1 } )

db.adminCommand(
  {
    shutdown: 1,
    force: false,
    timeoutSecs: 10,
    comment: "peace and out"
  }
);

use admin
db.createUser(
  {
    user: "adminUser",
    pwd: passwordPrompt(), # or cleartext password
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWriteAnyDatabase", db: "admin" }
    ]
  }
)

db.createUser(
  {
    user: "Thompson",
    pwd: "pass",
    roles:[
      { role: "readWrite" , db:"headlines" }
    ]
  }
)

db.getUsers()
db.dropUser("adminUser", {w: "majority", wtimeout: 4000});

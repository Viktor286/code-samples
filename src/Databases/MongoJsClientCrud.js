// 1. Connect to database:
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
await client.connect();
const db = client.db("dbName");

// 2. Insert document:
const collection = db.collection("collName");
const doc = { key: "value" };
await collection.insertOne(doc);

// 3. Find documents:
const query = { key: "value" };
const docs = await collection.find(query).toArray();

// 4. Update document:
const filter = { key: "value" };
const update = { $set: { key: "newValue" }};
await collection.updateOne(filter, update);

// 5. Delete document:
const filter = { key: "value" };
await collection.deleteOne(filter);

// 6. Create index:
await collection.createIndex({ key: 1});

// 7. Close connection:
await client.close();

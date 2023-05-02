// ACID compliant multi-document transaction
const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('your-db-name');

  const session = client.startSession();
  session.startTransaction();

  try {
    const newProduct = { id: newProductId, name: newProductName, articleIds: [articleId] };
    const { insertedId } = await db.collection('products').insertOne(newProduct, { session });

    await db
      .collection('articles')
      .updateOne({ _id: articleId }, { $addToSet: { productIds: insertedId } }, { session });

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
    await client.close();
  }
}

run().catch(console.error);

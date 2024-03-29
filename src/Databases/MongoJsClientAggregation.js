// 1. Simple aggregation:
const pipeline = [{ $match: { key: 'value' } }, { $group: { _id: '$groupKey', count: { $sum: 1 } } }];
const result = await collection.aggregate(pipeline).toArray();

// 2. Lookup (join) aggregation:
const pipeline = [
  { $match: { key: 'value' } },
  {
    $lookup: {
      from: 'otherCollection',
      localField: 'localKey',
      foreignField: 'foreignKey',
      as: 'joinedDocs',
    },
  },
];
const result = await collection.aggregate(pipeline).toArray();

// 3. Unwind array elements:
const pipeline = [{ $unwind: '$arrayField' }, { $project: { otherField: 1, arrayField: 1 } }];
const result = await collection.aggregate(pipeline).toArray();

// 4. Filter array elements:
const pipeline = [
  {
    $project: {
      otherField: 1,
      filteredArray: {
        $filter: { input: '$arrayField', as: 'elem', cond: { $eq: ['$$elem.key', 'value'] } },
      },
    },
  },
];
const result = await collection.aggregate(pipeline).toArray();

// 5. Sort and limit:
const pipeline = [{ $match: { key: 'value' } }, { $sort: { sortOrder: 1 } }, { $limit: 10 }];
const result = await collection.aggregate(pipeline).toArray();

// Retrieve an article along with its related products.
// Similarly, you can retrieve a product along with its related articles.
// (To save related data use ACID compliant Sessions)
const pipeline = [
  {
    $match: { _id: 'A' }, // Replace 'A' with the desired article ObjectId
  },
  {
    $lookup: {
      from: 'products',
      localField: 'productIds',
      foreignField: '_id',
      as: 'products',
    },
  },
];
const result = await collection.aggregate(pipeline).toArray();

const mongoDb = require('mongodb');
const client = new mongoDb.MongoClient('mongodb://localhost:27017');

const main = async () => {
    const db = client.db('iliauni');
    const doc = await db.collection('iliauni_users').insertOne({
        productName: 'Apple',
        weight: 500
    })
    
    const users = await db.collection('iliauni_users').find().toArray();
    console.log(users);
}
main();
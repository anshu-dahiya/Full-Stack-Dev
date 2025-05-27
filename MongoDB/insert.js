const { dbConnection } = require('./db');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');

        const data = [
            { name: "Naman", age: 34 },
            { name: "Cumins", age: 42 }
        ]

        const insertResult = await collection.insertMany(data);
        console.log(`${insertResult.insertedCount} document inserted`);
    }
    catch(error){
        console.error(error);
    }
}

main();
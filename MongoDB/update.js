const {dbConnection} = require('./db');

async function main() {
    try{
        const db = await dbConnection();
    const collection = db.collection('users');

    const updatedResult = await collection.updateMany({name:"Ammy"},{$set:{age:31}});

    console.log(`${updatedResult.modifiedCount} document updated`);
    }
    catch(error){
        console.error(error);
    }
}

main();

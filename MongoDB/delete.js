const {dbConnection} = require('./db');

async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const filter = {name:{ $in: ['Naman','Cumins'] } };
        
        const deleteResult =  await collection.deleteMany(filter);

        console.log(`${deleteResult.deletedCount} document deleted`);

    }
    catch(error){
        console.error(error);
    }
}

main();
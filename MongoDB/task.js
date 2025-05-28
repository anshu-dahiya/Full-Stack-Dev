const {dbConnection} = require('./db');

async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        
        const findResult = await collection.find().toArray()
        console.log(`Total Documents are: ${findResult.length}`);
        console.log(findResult);
    }
    catch(error){
        console.error("Error while performing task",error);
    }
}

main();
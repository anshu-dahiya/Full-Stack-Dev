const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myDB';

// async function main(){
//     await client.connect();
//     console.log("Connected Successfully to DB");
//     const db = client.db(dbName);
// }

const dbConnection =  async () => {
    try{
        await client.connect();
        console.log("Connected Successfully to DB");
        const db = client.db(dbName);
        return db;
    }
    catch(error){
        console.error("Failed to connect to the DB",error);
        throw error;
    }
}

module.exports = {dbConnection};
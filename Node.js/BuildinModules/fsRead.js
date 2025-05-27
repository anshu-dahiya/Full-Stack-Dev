//FS = File System, fs operation can perfromed async and sync way
const fs = require('fs');

//async read 
fs.readFile('file.txt', 'utf-8', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})


//sync read
const fileContent =  fs.readFileSync('file.txt','utf-8')

console.log(fileContent)
const { dir } = require('console');
const fs = require('fs')

//delete/remove directory async
fs.rmdir('new_Directory',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory Removed Async")
});


//delete/remove directory sync
fs.rmdirSync('new_Directory2');

console.log("Directory Removed Sync");

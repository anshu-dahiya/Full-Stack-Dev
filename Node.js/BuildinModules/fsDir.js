const { dir } = require('console');
const fs = require('fs')

//create directory async
fs.mkdir('new_Directory',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory Created Async")
});


//create directory sync
fs.mkdirSync('new_Directory2');

console.log("Directory Created Sync");

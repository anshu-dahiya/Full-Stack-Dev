const fs = require('fs');

//async write
fs.writeFile('text.txt','This file is writen async',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Written Successfully Async ');
})


//sync write
fs.writeFileSync('text2.txt','Sync written file','utf-8');
console.log('File written seccessfully Sync');
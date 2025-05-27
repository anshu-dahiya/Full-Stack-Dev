const fs = require('fs');

//Delete file async
fs.unlink('text.txt',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Async')
})


//Delete file sync
fs.unlinkSync('text2.txt');

console.log('File Deleted Sync')
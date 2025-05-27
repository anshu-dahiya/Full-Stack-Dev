const fs = require('fs');

//async stat
fs.stat('file.txt',(err,stats) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats);
})


//sync stat
const stats = fs.statSync('file.txt')

console.log(stats);
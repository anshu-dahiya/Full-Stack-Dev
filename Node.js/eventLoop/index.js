// Here we see which task run before
const fs = require('fs');

fs.readFile('__filename',() => {
    console.log('I m File');
    process.nextTick(() => console.log('I am inner process'));
})

setTimeout(() => {
    console.log('I am set timeout');
},0)

process.nextTick(() => console.log('I am process'));

Promise.resolve().then(() => console.log("This is promise"));
const path = require('path');

console.log(__filename)    //show complete path of present file
console.log(path.basename(__filename))   //show file name

console.log(__dirname);  //show complete path of directory/folder in which present file is
console.log(path.basename(__dirname))   //show directory/folder name in which present file is

console.log(path.extname(__filename)) //show extention(.js) of present file


console.log('Join ->')
console.log(path.join('/hello1','/hello2','file.txt'));
console.log(path.join('hello1','hello2','file.txt'));
console.log(path.join('hello1','//hello2','file.txt'));
console.log(path.join('hello1','hello2/','/file.txt'));
console.log(path.join('hello1','hello2','../file.txt'));


console.log('Resolve ->') //Different then Join
console.log(path.resolve('/hello1','/hello2','file.txt'));
console.log(path.resolve('hello1','hello2','file.txt'));
console.log(path.resolve('hello1','//hello2','file.txt'));
console.log(path.resolve('hello1','hello2/','/file.txt'));
console.log(path.resolve('hello1','hello2','../file.txt'));


const pathProps = path.parse('/foo/bar/sample.js');  //parse return obj

console.log(pathProps)




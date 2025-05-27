const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url !== "/"){
        return res.end();
    }

    //this how read and write by stream(longer way to read and send the file)
    // const readableStream = fs.createReadStream('file.txt');

    // readableStream.on('data', (chunk) => {
    //     res.write(chunk);         //Reading the file bit by bit (in "chunks")
    // })

    // readableStream.on('end',() => {
    //  res.end();                      //Ending the response when done
    // })

    // readableStream.on('error', (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('Internal Server Error');
    // })

    const readableStream = fs.createReadStream("file.txt");
    readableStream.pipe(res);     //replace all above steps by using pipe
                        // pipe() method is like creating a direct pipeline from the file to the visitor 

})

server.listen(3001,() => {
    console.log('Listening...')
})
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url !== "/"){
        return res.end();
    }

    const file = fs.readFileSync('file.txt');
    return res.end(file);

})

server.listen(3000,() => {
    console.log('Listening...')
})
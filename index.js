const { readFileSync } = require('fs');
const http = require('http');
const fs = require('fs')

const hostname = '0.0.0.0';
const port = 3500;


const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.writeHead(200, {'Content-Type': 'text/html'});

   

    if(req.url=='/create_acount.html')
    {

        const data = fs.readFileSync('create_acount.html');
        res.write(data);

    }
    else{
        const data = fs.readFileSync('firstBoot.html');
        res.write(data);
    }

    res.end()
   
})

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
const http = require('http');
const url = require('url');

//how to create a web server and response:
http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;

  console.log(queryObject['a']);

    if(queryObject['a'] === 'a'){
        res.writeHead(200, { 
            'Content-Type': 'text/plain'
        });
        res.end('hello world');
    } else {
        res.writeHead(200, {  
            'Content-Type': 'text/plain'
        });
        res.end('bye world');
    }

}).listen(3000);


    // res.writeHead(200, { //remember to write res as it is, not 'response' since we defined it as res in line above
    //     'Content-Type': 'text/plain'
    // });
    // res.end('Hello from NodeJS Application');

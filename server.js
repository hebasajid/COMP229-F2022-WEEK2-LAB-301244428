const connect = require('connect');
const app = connect();

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function helloWorld2(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
};

function helloWorld3(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "Hello from NodeJS application as json"}));
};

app.use('/html', helloWorld2);
app.use('/json', helloWorld3);
app.use(helloWorld);
app.listen(3000);
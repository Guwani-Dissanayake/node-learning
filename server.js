const http = require('http');
const url = require('url');

const server= http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview'){
        res.end('overview');
    }
    else if(pathName === '/product'){
        res.end('this is PRODUCT');
    }
    else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found</h1>')
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listen to 8000');
})
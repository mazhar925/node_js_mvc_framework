const http = require('http');
const Router = require('./routes/web');

const server = http.createServer((req, res) => {
    Router.handle(req, res);
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

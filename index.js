// dependencies
const http = require('http');

// The server should respond to all request with a string
const server = http.createServer((req, res) => {
    res.end('Hello !');
});

// Start the server, and have it to listen on port 3000
const port = 300;
server.listen(port, () => {
    console.log(`Server start on http://localhost:${port}`);
});
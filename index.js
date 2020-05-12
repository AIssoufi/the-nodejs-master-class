// dependencies
const http = require('http');
const url = require('url');

// The server should respond to all request with a string
const server = http.createServer((req, res) => {
    // get the URL and parse it
    const parsedUrl = url.parse(req.url, true);

    // get the pathname
    const pathname = parsedUrl.pathname;

    // get the HTTP method
    const method = req.method.toLowerCase();

    // get query string
    const queryStringObject = parsedUrl.query;

    // get the headers
    const headers = req.headers;

    res.end(`${method} ${pathname} ${JSON.stringify(queryStringObject)} ${JSON.stringify(headers)}`);
});

// Start the server, and have it to listen on port 3000
const port = 300;
server.listen(port, () => {
    console.log(`Server start on http://localhost:${port}`);
});
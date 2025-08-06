const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        // For demonstration, we send a 501 error for any request
        res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        res.end('501 - This is what you get');
    });
});

const PORT = 3005;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

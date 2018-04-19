var http = require('http');

var handleRequest7000 = function(req, res) {
    res.end("You are a great coder!");
};

var server7000 = http.createServer(handleRequest7000);

server7000.listen(7000, function() {
    console.log("The server is correctly listening on http://localhost:7000");
});
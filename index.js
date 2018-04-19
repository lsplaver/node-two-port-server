var http = require('http');

var handleRequest7000 = function(req, res) {
    res.end("You have great analytical skills!");
};

var server7000 = http.createServer(handleRequest7000);

server7000.listen(7000, function() {
    console.log("The server is correctly listening on http://localhost:7000");
});

var handleRequest7500 = function(req, res) {
    res.end("You have terrible taste in music!");
};

var server7500 = http.createServer(handleRequest7500);

server7500.listen(7500, function() {
    console.log("The server is correctly listening on http://localhost:7500");
});
var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function(request, response) {
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();


});
server.listen(8084);
var https = require("http");

var server = https.createServer(function (req,res) {
    res.writeHead(404);
    res.write("Gygeyqgerygqer");
    res.end();
});
server.listen(8094);

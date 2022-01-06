var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
    var _url = request.url;

    // 16장 확인용
    const myURL = new URL("http://localhost:3000" + _url);
    var queryData = myURL.searchParams.get("id");
    if (!queryData) {
        queryData = undefined;
    }
    //

    if (_url == "/") {
        _url = "/index.html";
    }
    if (_url == "/favicon.ico") {
        return response.writeHead(404);
    }
    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));
    // //16장
    // response.end(fs.readFileSync(queryData));
    // //8장
    // response.end("fileName :" + url);
});
app.listen(3000);

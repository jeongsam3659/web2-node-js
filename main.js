var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === "/") {
        // path에 없는 경로 접속시 해당 내용을 출력
        if (queryData.id === undefined) {
            fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
                var title = "welcome";
                var description = "Hello, Node.js";
                var template = `
                <!doctype html>
                <html>
                <head>
                  <title>WEB1 - ${title}</title>
                  <meta charset="utf-8">
                </head>
                <body>
                  <h1><a href="/">WEB</a></h1>
                  <ol>
                    <li><a href="/?id=Html">HTML</a></li>
                    <li><a href="/?id=Css">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                  </ol>
                  <h2>${title}</h2>
                  <p>
                    ${description}
                  </p>
                </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
                var title = queryData.id;
                var template = `
                  <!doctype html>
                  <html>
                  <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                  </head>
                  <body>
                    <h1><a href="/">WEB</a></h1>
                   <ol>
                      <li><a href="/?id=Html">HTML</a></li>
                      <li><a href="/?id=Css">CSS</a></li>
                      <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>
                      ${description}
                    </p>
                  </body>
                  </html>
                  `;
                response.writeHead(200);
                response.end(template);
            });
        }
    } else {
        // 해당값(html,css,js등등..)에 없으면 404NotFound 출력.(에러출력)
        response.writeHead(404);
        response.end("Not Found");
    }

    // # 읽어온 queryData.id값에 해당하는 파일명의 내용을 읽어와 적용시키기.
});
app.listen(3000);

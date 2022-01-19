var http = require("http");
var fs = require("fs");
var url = require("url");

function templateHTML(title, list, body) {
    return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}
function listHTML(filelist) {
    // 글목록 js
    var list = `<ul>`;
    var tegcount = 0;
    while (tegcount < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[tegcount]}">${filelist[tegcount]}</a></li>`;
        tegcount = tegcount + 1;
    }
    list = list + `</ul>`;
    // 위에서 해당 list변수에 내용을 담은 후 list변수를 반환
    return list;
}

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === "/") {
        // path에 없는 경로 접속시 해당 내용을 출력
        if (queryData.id === undefined) {
            fs.readdir("./data", function (error, filelist) {
                var title = "welcome";
                var description = "Hello, Node.js";
                // 중복문 함수화
                //list
                var list = listHTML(filelist);
                // html
                var template = templateHTML(
                    title,
                    list,
                    `
                    <h2>${title}</h2>
                    <p>
                    ${description}
                    </p>
                    `
                );
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir("./data", function (error, filelist) {
                // 중복문 함수화
                fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
                    var title = queryData.id;
                    var list = listHTML(filelist);
                    var template = templateHTML(
                        title,
                        list,
                        `
                      <h2>${title}</h2>
                      <p>
                      ${description}
                      </p>
                      `
                    );
                    response.writeHead(200);
                    response.end(template);
                }); // fs.readFile
            }); //fs.readdir
        }
    } else if (pathname === "/create") {
        //pathname이 "/create"일시 동작.
        fs.readdir("./data", function (error, filelist) {
            var title = "WEB - Create";

            // 중복문 함수화
            //list
            var list = listHTML(filelist);
            // html
            var template = templateHTML(
                title,
                list,
                `
                <form action="https://localhost:3000/process_create" method="POST">
                    <p><input type="text" name="title" placeholder="제목" /></p>
                    <p><textarea cols="30" rows="10" name="description" placeholder="내용"></textarea></p>
                    <p><input type="submit" value="제출" /></p>
                </form>
                `
            );
            response.writeHead(200);
            response.end(template);
        });
    } else {
        // 해당값(html,css,js등등..)에 없으면 404NotFound 출력.(에러출력)
        response.writeHead(404);
        response.end("Not Found");
    }

    // # 읽어온 queryData.id값에 해당하는 파일명의 내용을 읽어와 적용시키기.
});
app.listen(3000);

//-------원본
// 글목록

// var list = `<ul>`;
// var tegcount = 0;
// while (tegcount < filelist.length) {
//     list = list + `<li><a href="/?id=${filelist[tegcount]}">${filelist[tegcount]}</a></li>`;
//     tegcount = tegcount + 1;
// }
// list = list + `</ul>`;

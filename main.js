var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

var template = require(`./lib/template.js`);

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === "/") {
        // path에 없는 경로 접속시 해당 내용을 출력
        //  -* 대문 *-
        if (queryData.id === undefined) {
            fs.readdir("./data", function (error, filelist) {
                var title = "welcome";
                var description = "Hello, Node.js";

                /*
                // 중복문 함수화 (old)
                //list
                var list = listHTML(filelist);
                // html
                var template = templateHTML(
                    title,
                    list,
                    `<h2>${title}</h2><p>${description}</p>`,
                    `
                    <a href="/create">create</a> 
                    `
                );
                */

                // 중복문 함수화
                //list
                var list = template.list(filelist);
                // html
                var html = template.html(
                    title,
                    list,
                    `<h2>${title}</h2><p>${description}</p>`,
                    `
                    <a href="/create">create</a> 
                    `
                );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir("./data", function (error, filelist) {
                //  -* 작성글 *-
                fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
                    var title = queryData.id;
                    var list = template.list(filelist);
                    var html = template.html(
                        title,
                        list,
                        `<h2>${title}</h2><p>${description}</p>`,
                        `
                        <a href="/create">create</a> 
                        <a href="/update?id=${title}">update</a>
                        <form action="delete_process" method="POST">
                            <input type="hidden" name="id" value="${title}">
                            <input type="submit" value="delete">
                        </form>
                        `
                    );
                    response.writeHead(200);
                    response.end(html);
                }); // fs.readFile
            }); //fs.readdir
        }
    } else if (pathname === "/create") {
        //  -* Create 글 작성. *-
        //pathname이 "/create"일시 동작.
        fs.readdir("./data", function (error, filelist) {
            var title = "WEB - Create";
            var list = template.list(filelist);
            var html = template.html(
                title,
                list,
                `
                <form action="/create_process" method="POST">
                    <p>
                        <input type="text" name="title" placeholder="제목" />
                    </p>
                    <p>
                        <textarea cols="30" rows="10" name="description" placeholder="내용"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="제출" />
                    </p>
                </form>
                `,
                ``
            );
            response.writeHead(200);
            response.end(html);
        });
    } else if (pathname === `/create_process`) {
        //  -* create 글 결과처리. *-
        var body = ``;
        request.on(`data`, function (data) {
            body = body + data;
        });
        request.on(`end`, function () {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;

            fs.writeFile(`data/${title}`, description, `utf-8`, function (error) {
                response.writeHead(302, {
                    Location: `/`,
                });
                response.end();
            });
        });
    } else if (pathname === `/update`) {
        //  -* Update 글 수정. *-
        //pathname이 "/update"일시 동작.
        fs.readdir("./data", function (error, filelist) {
            fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.html(
                    title,
                    list,
                    `
                    <form action="/update_process" method="POST">
                        <input type="hidden" name="id" value="${title}">
                        <p>
                            <input type="text" name="title" placeholder="제목" value="${title}" />
                        </p>
                        <p>
                            <textarea cols="30" rows="10" name="description" placeholder="내용">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit" value="제출" />
                        </p>
                    </form>
                    `,
                    `
                    <a href="/create">create</a> 
                    <a href="/update?id=${title}">update</a>
                    `
                );
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if (pathname === `/update_process`) {
        //  -* update 글 결과처리. *-
        var body = ``;
        request.on(`data`, function (data) {
            body = body + data;
        });
        request.on(`end`, function () {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;

            console.log(id);

            // fs.readfile
            fs.rename(`data/${id}`, `data/${title}`, function (error) {
                //
                fs.writeFile(`data/${title}`, description, `utf-8`, function (err) {
                    response.writeHead(302, {
                        Location: `/?id=${title}`,
                    });
                    response.end();
                });
            });
        });
    } else if (pathname === `/delete_process`) {
        //  -* delete 글 결과처리. *-
        var body = ``;
        request.on(`data`, function (data) {
            body = body + data;
        });
        request.on(`end`, function () {
            var post = qs.parse(body);
            var id = post.id;
            fs.unlink(`data/${id}`, function (error) {
                response.writeHead(302, {
                    Location: `/`,
                });
                // 삭제시 홈으로 보내기.
                response.end();
            });
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

module.exports = {
    // 글 템플릿HTML
    html: function (title, list, body, control) {
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
        ${control}
        ${body}
      </body>
      </html>
      `;
    },

    //글목록 js
    list: function (filelist) {
        var list = `<ul>`;
        var tegcount = 0;
        while (tegcount < filelist.length) {
            list = list + `<li><a href="/?id=${filelist[tegcount]}">${filelist[tegcount]}</a></li>`;
            tegcount = tegcount + 1;
        }
        list = list + `</ul>`;
        // 위에서 해당 list변수에 내용을 담은 후 list변수를 반환
        return list;
    },
};

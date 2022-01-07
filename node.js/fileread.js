const fs = require("fs");

//구버젼
fs.readFile("sample.txt", "utf8", function (err, data) {
    console.log(data);
});

// 신버젼.
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) {
        console.err(err);
        return;
    }
    console.log(data);
});

// 둘중 하나 주석처리 후 실행.

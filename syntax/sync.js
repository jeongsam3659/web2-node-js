// smaple.txt와 연동.

var fs = require("fs");

// filereadSync
// console.log("- 동기출력확인 용 로그 -");
// var result = fs.readFileSync("syntax/sample.txt", "utf-8");
// console.log(result);
// console.log("C");

// fileread
console.log("- 비동기출력확인 용 로그 -");
fs.readFile("syntax/sample.txt", "utf-8", function (err, result) {
    console.log(result);
});
console.log("C");

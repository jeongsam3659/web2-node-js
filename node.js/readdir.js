const testFolder = "./data"; // 파일 위치가 아닌 실행하는 위치의 데이터dir경로.
const fs = require("fs");

fs.readdir(testFolder, function (error, filelist) {
    console.log(filelist);
});

// 원본
/*

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});

*/

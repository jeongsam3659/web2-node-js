// function a() {
//     console.log("일반 함수");
// }

var a = function () {
    console.log("익명 함수");
};

a();

function slowfunc(callback) {
    callback();
}

slowfunc(a);

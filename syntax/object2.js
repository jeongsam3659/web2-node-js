// object oriented programming 객체값으로서 함수
function f1() {
    console.log("함수입니다.,");
}

console.log(f1); // function : f1
f1(); //함수 실행.

// 배열속 함수
function f() {
    console.log("배열속 함수.");
}

var a = [f];
a[0]();

// 객체속 함수
var o = {
    func: f,
};

o.func();

// #20
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 > 2); //false
console.log(2 >= 1); //true

console.log("----- 구분선 -----");

// #22
let a = 20;
if (a > 20) {
    console.log("a는 20보다 큽니다. true");
} else {
    console.log("a는 20보다 작습니다. false");
}

if (true) {
    console.log("조건문은 true 입니다.");
}

console.log("----- 구분선 -----");

// #23
var args = process.argv;
console.log(args[2]);

if (args[2] === "1") {
    console.log("문자 1 true");
} else {
    console.log("문자= " + args[2] + " false");
}

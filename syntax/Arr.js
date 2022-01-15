var arr = ["A", "B", "C", "D", "E", "F"];

console.log(arr[1]);
console.log(arr[5]);
// 0부터 시작해서 []~

// 값변경
arr[2] = 3;
console.log(arr);
// 배열의 갯수
console.log(arr.length);
console.log("0------ 구분선 ------0");

// Array & Loop
var number = [1, 400, 22, 34];
var i = 0;
let total = 0;
while (i < number.length) {
    total = total + number[i];
    console.log(number[i]);
    i++;
}

console.log(`total : ${total}`);

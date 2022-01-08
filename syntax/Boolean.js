// #19
console.log(true);
console.log(false);

// true / false 약속된 변수이기때문에 변수로 사용할 수 없다.
// true = 1;

/*
    # ==는 Equal Operator , ===는 Strict(엄격한) Equal Operator
    ==은 단순히 값을 비교해서 true/false를 출력하고
    ===은 값과 값의 종류(Data Type)을 비교해서 true/false를 출력한다.
*/

// 숫자 1 과 문자 1
console.log(1 == "1"); // true
console.log(1 === "1"); // false

// null 과 undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

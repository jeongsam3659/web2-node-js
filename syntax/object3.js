var o = {
    v1: `v1`,
    v2: `v2`,
    f1: function () {
        //고로 객체로 묶어놓아야한다.
        console.log(this.v1);
    },
    f2: function () {
        console.log(this.v2);
    },
};

// function f1() {
//     console.log(o.v1);
// }

function f1() {
    // 이렇게  같은명의 함수가 선언시
    // 위 함수는 없는거나 다름없게 된다.
}

f1();
f2();

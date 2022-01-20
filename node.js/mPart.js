// 선언
var M = {
    v: "v",
    f: function () {
        console.log(this.v);
    },
};

// 실행
//M.f();

// module 바깥에서 사용 = 그 대상.
module.exports = M;

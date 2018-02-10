// 네임 스페이스 패턴: 변수 x는 공개되어있어 변조가 가능하다.
/*
var com = {};
com.eastflag = {};
com.eastflag.java = {
    x: 'public',
    getX: function() {
        console.log(this.x);
    }
};
com.eastflag.java.getX();

com.eastflag.java.x = 'change';
com.eastflag.java.getX();
*/

// IIFE (즉시 실행함수) 패턴
// 위에처럼 com.eastflag.java.x = 'change'; 로 하면 x가 public인데 chabge로 바껴진다.
// 그렇기 때문에 이런 내용을 private로 하고싶을 때 클로저 한다고 말한다.
// closer는 아래와 같은 내용으로 참고하면 된다.
var com = {};
com.eastflag = {};
com.eastflag.java = (function () {
    var x = 'private';
    function y() {
        console.log(x);
    }
    return { getX: y };
})(); // IIFE 패턴(= (function ~)();를 즉시실행해서 .java에 넣어라)

com.eastflag.java.getX();

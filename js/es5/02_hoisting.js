//함수 호이스팅:
hoisting1 = "hoisting1";
console.log(hoisting1);
var hoisting1;
// var hoisting1;가 호이스팅이다. 밑에 선언을 해도 위에서 먼저 변수 선언한 것과 같아진다.

// 호이스팅이 되지 않는다.
// why? 변수 선언과 동시에 바로 선언까지 하면 호이스팅이 되지 않는다.
// 변수 선언은 호이스팅 안되지만 함수 선언은 호이스팅이 된다.
console.log(hoisting2);
var hoisting2="hoisting2";

//함수 선언문은 호이스팅 된다.
var myName = (first, last) => console.log(first + last)

myName("Yan", "Fan");

// 아래에 늦게 선언해도 되지만 좋은 방법은 아님... 이렇게 쓰지말고
/*
function myName(first, last) {
    console.log(first + last);
}
*/
// 이렇게 함수 표현식으로 작성하자.
// 함수 표현식을 작성하고 테스트 하시오. 호이스팅 되는가?
// 안된다. 밑에 있으니까... 위로 올리자
// var myName = (first, last) => console.log(first + last)

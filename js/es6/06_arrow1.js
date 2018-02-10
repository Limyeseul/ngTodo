/*
보통 function [함수명]() { .. } 이런식인데 함수명이없어도 된다 (= 익명함수)
이 아래에 함수 선언문이 없는 내용을 표현식이라고 한다. hoisting이 일어나지 않은게 특징
아래의 익명함수는 arrow Function (기호는 fat arrow =>)으로 바꿀 수 있다.

let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};
 */

// 위의 문장을 한줄로 작성하시오.

// 1. Function을 =>로 변환
// 2. 함수구문이 한줄이면 {} 생략 가능
// 3. 표현식일 경우 return 생략 가능
let circleArea = (pi, r) => pi * r * r

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"

// +. 함수 파라미터가 한개일 경우 () 생략 가능
// 단 파라미터가 하나도 없을 경우 () 생략 불가능

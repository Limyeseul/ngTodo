// 생성자 함수에서의 this의 의미

function person() {
    this.someValue = 2;
    var someValue2 = 3;
}

console.log(person()); //실행결과는? 그 이유는?
// 결과 : undefined
// return이 없기 때문

console.log(new person()); // 생성자 함수로 생성시 실행결과는?
// 생성자함수 => new
// 내부적으로 자기자신을 가르키는 this가 생성(java와 동일)
// 명시적인 return이 없으면 this가 return된다.

// 결과 : person { someValue: 2 }
// key:value로 this가 return이 된다.

console.log(someValue); // 실행결과와, 이유를 말하시오
// 결과 : 2

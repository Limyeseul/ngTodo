// arrow 펑션과 lexical function

// lexical => 현재 context(실행영역)

// 1,2,3 출력 되도록 수정하시오.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
/*
function Person() {
    // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
    this.age = 0;

    // 1초마다 익명함수를 호출...
    // setInterval윈도우 객체기 때문에 현재 영역에서 기억하는게 아니라 윈도우 영역에서 기억하고 있다.
    setInterval(function growUp() {
        // 비엄격 모드에서, growUp() 함수는 `this`를
        // 전역 객체로 정의하고, 이는 Person() 생성자에
        // 정의된 `this`와 다름.

        // 여기서 this는 윈도우영역인데 해당 영역에 age가 없기 때문에 에러가 발생. 만약 윈도우 영역으로 옮기려면 age를 밖으로 빼자.
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();
*/

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| 는 정확히 person 객체를 참조
        console.log(this.age);
    }, 1000);
}

var p = new Person();

// 함수 실행시 디폴트 값을 설정하는 방법
function myFunction(x = 1, y = 2, z = 3 + 5) {
    console.log(x, y, z);
}

// 1.
// 파람에 y, z는 undefined가 된다.
// 만약 파람이 x만 받고싶어도 y랑 z에 값을 넣고 싶으면 위에 함수선언에 디폴트 값을 설정하면 된다.
myFunction(6);

// 2.
myFunction(6,7);

// 3. 3번째 파라메터 z로 넘기는 방법
myFunction(undefined, undefined, 1);

/*
js는 오버로딩 x
ts는 오버로딩 o (?을 옵셔널 파라미터로 함)
  f(x, ?y, ?z) => x는 필수, y&z는 옵셔널
 */

/**
 * Created by eastflag on 2016-10-14.
 */

// loadsh
// 배열을 _ 로 쉽게 조작할 수 있도록 한 js 라이브러리


// 1. 아래의 내용을 리터럴 객체로 담는 array list를 생성하시오.
//title	          price	  author	order
//--------------------------------------
//콩쥐팥쥐	      20000	  미상	  1
//흥부놀부	      25000	  미상	  2
//자바의정석	    35000	  정석	  3
//안드로이드정복	15000	  김상형	4
var books = [
  {title: "콩쥐팥쥐", price: 20000, author: "미상", order: 1},
  {title: "흥부놀부", price: 25000, author: "미상", order: 2},
  {title: "자바의정석", price: 35000, author: "정석", order: 3},
  {title: "안드로이드정복", price: 15000, author: "김상형", order: 4},
];

// 2. books의 type은 무엇인가? 자바스크립트의 타입은 몇가지가 있는가?
console.log(typeof books);
// (symbol, null, undefined.)
// 타입은 크게 2가지로 나뉜다.
// 참고자료 : http://jdm.kr/blog/213
// primitive type : 기본/원시형
// reference type : 참조형, 메모리 주소가 들어감


//3. 맨 앞쪽에 이것이자바다, 40000, 김상형, 5를 추가하시오 (힌트: unshift)

//4. 맨 앞쪽에 추가한것을 지우시오,

// 5. 맨 뒷쪽에 추가하시오. (힌트: push)

// 6. 맨 뒤쪽에 추가한것을 지우시오,

// 7. 흥부놀부와 자바의정석 사이에 삽입하시오. (힌트: splice)

// 8. 방금 삽입한거를 삭제하시오.

// 9. 원본 배열에서 자바의 정석을 찾아서 저자를 남궁성으로 바꾸시오(힌트: forEach)

// 10. 책의 총 비용을 출력하시오
/* es5
var sum; // es5
books.forEach(function (item, index) {
});
*/
let sum = 0; // es6
// ts문법
books.forEach(item => sum += item.price)
console.log(sum)

// 11. 제목앞에 판매순위를 등수를 붙인 새로운 배열을 생성하시오.(힌트: map)



// 12. 새로운 배열을 만들되 3등안에 있는것만 따로 만든다. (힌트: filter)


//동등비교연산자
//== 값이 같음
//!= 값이 다름
//=== 값과 타입이 모두 같음
//=== 값과 타입이 다름

//QUIZ
const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //결과는 false
//obj1에는 name데이터를 가지고 있는 임의의 주소의 값이 할당되어있고 obj2도 마찬가지.
//서로 가지고 있는 번지수는 다름

console.log(obj1.name == obj2.name); //결과는 true

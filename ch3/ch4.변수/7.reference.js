//값에 의한 복사 vs 참조에 의한 복사

//원시타입은 값이 복사되어 저장됨.
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

//객체타입은 참조값(메모리 주소-aka.레퍼런스)이 복사되어 전달됨.
//C언어의 포인터와 비슷한 개념.
let apple = {
  name: "apple",
};
let orange = apple;
console.log(apple);
console.log(orange);

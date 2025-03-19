//배열 생성 방법
//1. new Array() 사용
let array = new Array(3);
array = new Array(1, 2, 3, 4, 5);
console.log(array);

//2. Array.of 사용
array = Array.of(1, 2, 3, 4, 5);

//3. [](리터럴) 사용
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

//4. Array.from 사용
array = Array.from(anotherArray);
console.log(anotherArray);

//Tip: 자바스크립트에서의 배열이란
//일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함.
//But, 자바스크립트에서의 배열은 연속적으로 이어져 있지 않으며, 오브젝트와 유사함.
//자바스크립트는 배열의 일반적인 배열의 동작을 흉내낸 특수한 객체다..!
//이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음.(자세한건 MDN 참조)

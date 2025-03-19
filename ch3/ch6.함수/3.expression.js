//함수 선언문   function name(){}

//함수 표현식   const name = function(){}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); //함수의 객체를 임의의 메모리에 할당하고, 해당 메모리 주소의 값이 add에 할당됨.

//화살표 함수   const name = () =>{}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//생성자 함수
const obj = new Function();

//IIFE (Immediately-Invoked Function Expression)
//함수를 호출하지 않고도 바로 실행할 수 있게 해줌.
(function run() {
  console.log("gg");
})();

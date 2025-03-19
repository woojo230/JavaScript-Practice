//콜백함수
//함수는 C언어와 비슷하다. 매개변수로 선언한 파라미터만 함수 내부에서 사용 가능함.
//함수 호출부와 함수 선언부를 헷갈리지 말자.

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라,
//함수를 가리키고 있는 함수의 레퍼런스(참조값)(aka.주소)가 전달된다.
//그래서 함수는 고차함수 안에서 필요한 순간 호출이 나중에 됨.
function calcaulator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

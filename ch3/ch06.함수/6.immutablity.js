//다음 함수와 같이,
//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 지양해야함.
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함.

//원시값 - 값에 의한 복사(큰 상관이 없음)
function display(num) {
  num = 5; //Type shi
  console.log(num);
}

const value = 4;
display(value); //5
console.log(value); //4

//BUT
//객체값 - 참조에 의한 복사, 함수 내부에서 인자로 전달한 값을 변경해버리면 함수 외부의 값도 변경됨.
function displayObj(obj) {
  obj.name = "bob";
  console.log(obj);
}
const woo = { name: woo };
displayObj(woo); //bob
console.log(woo); //woo가 아니, bob이 출려됨.

//만약 바꿔야 하는 상황이라면
function changeName() {
  //함수 이름부터 변경하는 느낌을 주며,
  return { ...obj, name: "bob" }; //반환할때는 새로운 오브젝트 만들기
}

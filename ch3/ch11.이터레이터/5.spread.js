//spread 연산자, 전개구문
//모든 Iterable은 spread 될 수 있다.
//순회가 가능한 모든 것들은 최르르륵 펼쳐 질 수 있다.

//사용 예제 1
function add(a, b, c) {
  return a + b + c;
}

const num = [1, 2, 3];
console.log(num[0], num[1], num[2]); //대신
console.log(add(...num)); //이런식으로 활용 가능

//사용 예제 2
function sum(first, second, ...rest) {
  console.log(rest);
}
sum(1, 2, 0, 1, 2, 4); //0,1,2,4가 rest에 전달됨.

//사용 예제 3
//Array Concat
const fruits1 = ["apple", "kiwi"];
const fruits2 = ["berry", "banana"];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, ...fruits2]; //위랑 결과값 같음
console.log(arr);

//사용 예제 4
//Object
const person = { name: "woo", age: 20, home: { address: "Iteawon" } };
const update = {
  ...person,
  job: "students",
};
console.log(update); //person의 객체를 그대로 대려오며 새로운 객체를 추가할 수 있음

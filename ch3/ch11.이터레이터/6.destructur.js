//구조 분해 할당
//Destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들 수 있다

//구조분해 할당 예시 1
const fruits = ["apple", "kiwi", "berry", "banana"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

//예시 2 (배열)
const point = [1, 2, 3];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);

//예시 3 (함수)
function createEmoji() {
  return ["soso", "ㅡㅡ"];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

//예시 4 (객체)
const person = { name: "woo", age: 20 };
function display({ name, age }) {
  console.log(name);
  console.log(age);
}
display(person);

//예시 5
const { name, age: ouu } = person;
console.log(name);
console.log(ouu);

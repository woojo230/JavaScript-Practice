//Quiz 1
const input = ["banana", "berry", "grape", "berry"];
let output = input.map((item) => {
  if (item === "berry") {
    return "kiwi";
  } else {
    return item;
  }
});
console.log(output);

//Quiz 2
//input 배열은 변하지 않았음, output 배열이 조건에 맞게끔 input 배열을 재구성 한 것.
function count(arr, item) {
  return arr.filter((value) => {
    return value === item;
  }).length; //로직의 흐름을 잘 익혀두자
}
console.log(count(output, "kiwi"));

//Quiz 3
//const input = ["banana", "berry", "grape", "berry"];
const temp = ["banana", "kiwi", "grape"];
function match(input, search) {
  return input.filter((item) => {
    return search.includes(item);
  });
}
console.log(match(input, temp));

//forEach: 배열을 빙글빙글 돌면서 원하는 것을 할 때
const fruit = ["banana", "berry", "grape", "berry"];
fruit.forEach((value, index, array) => {
  console.log("----------------");
  console.log(value);
  console.log(index);
  console.log(array);
});

//find: 제일 먼저 조건에 맞는(콜백함수) 아이템을 반환
const item1 = { name: "바나나", price: 5 };
const item2 = { name: "쿠키", price: 1 };
const item3 = { name: "우유", price: 2 };
const products = [item1, item2, item3];
let found = products.find((value) => {
  return value.name == "쿠키";
});
console.log(found);

//findIndex: 제일 먼저 조건에 맞는 아이템의 인데스를 반환
found = products.findIndex((value) => {
  return value.name == "쿠키";
});
console.log(found);

//배열의 아이템들이 부분적을 조건에 맞는지 확인
result = products.some((item) => {
  return item.name == "쿠키";
});
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => {
  return item.name == "쿠키";
});
console.log(result);

//조건에 맞는 아이템들을 새로운 배열로 반환
result = products.filter((item) => {
  return item.name == "쿠키";
});
console.log(result);

//Map: 배열의 아이템들을 각각 다른 아이템으로 맵핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  return item * 2;
});
console.log(result);

//응용 버전
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//flatMap: 중첩된 배열을 쫙 펴줌.
//map 사용
result = nums.map((item) => {
  return [1, 2];
});
console.log(result);

//flatMap 사용
result = nums.flatMap((item) => {
  return [1, 2];
});
console.log(result);

//flatMap 사용 예제 2
result = ["dream", "coding"].flatMap((text) => text.split(""));
console.log(result);

//sort 배열의 아이템들을 정리
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //문자열 형태의 오름차순으로 정렬하므로, 1다음 10이 정렬됨.
console.log(numbers);
numbers.sort((a, b) => {
  //정수를 기준으로 정렬하고 싶을때 쓰는 로직.
  return a - b;
});
console.log(numbers);

//reduce 배열의 요소들을 접어서 접어서 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  return (sum += value);
});
console.log(result);

//배열의 유용한 함수들
//Point: 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruit = [1, 2, 3, 4];

//특정한 오브젝트가 배열인지 확인하는 매서드
console.log(Array.isArray(fruit)); //true 반환

//특정한 아이템의 인덱스를 찾는 매서드
console.log(fruit.indexOf(2));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruit.includes(2));

//추가 - 제일 뒤
let length = fruit.push(5); // 배열 자체를 수정(업데이트)
console.log(fruit); // 배열 리턴
console.log(length); //5 리턴

//추가 - 맨 앞
length = fruit.unshift("딸기"); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(length);

//삭제 - 제일 뒤
let lastItem = fruit.pop(); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(lastItem);

//삭제 - 맨 앞
lastItem = fruit.shift(); // 배열 자체를 수정(업데이트)
console.log(fruit);
console.log(lastItem);

//중간에 추가 또는 삭제
//첫번째 매개변수: 시작하는 인덱스, 두번째 매개변수: 시작하는 인덱스로부터 몇개를 삭제할건지
const deletes = fruit.slice(1, 1); // 배열 자체를 수정(업데이트)
fruit.slice(1, 0, "딸기", "사과");

//잘라진 새로운 배열을 만듬
let newArr = fruit.slice(0, 2);
console.log(newArr);
console.log(fruit);
newArr = fruit.slice(-1); //결과값: 맨 뒤에 있는 데이터를 반환

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩배열을 하나의 배열로 쫙 펴기
let arr = [1, 2, 3, [4, 5]];
console.log(arr.flat(1));

//특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);

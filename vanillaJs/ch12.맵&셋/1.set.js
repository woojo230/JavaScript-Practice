//Set - 자료구조의 일부
//순서가 존재하지 않음.
//중복이 불가능.

const set = new Set([1, 2, 3]);
console.log(set);

//유용한 set 매서드
//사이즈 확인
console.log(set.size);

//해당 데이터가 존재하는지 확인
console.log(set.has(2));

//순회
set.forEach((item) => {
  console.log(item);
});
//
for (const value of set.values()) {
  console.log(value);
}

//추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); //Set은 중복 불가

//삭제
set.delete(6);
console.log(set);

//전부삭제
set.clear();
console.log(set);

//오브젝트 Set
const obj1 = { name: "apple", price: 8 };
const obj2 = { name: "banana", price: 4 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//quiz
//objs에는 obj1과 obj2의 주소가 들어있음으로, 객체값을 바꿔도 중복이 아님
obj1.price = 10;
objs.add(obj1);
console.log(objs);

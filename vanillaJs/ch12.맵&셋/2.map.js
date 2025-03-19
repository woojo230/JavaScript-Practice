//Map - 자료구조의 일부
//Set과 비슷하지만(순서 없음, 중복 불가능), 무조건 key를 통해서 찾고 순회하고 추가가 가능함,
//key 값이 유일한 아이디이기 때문

const map = new Map([
  ["key1", "apple"],
  ["key2", "banana"],
]);
console.log(map);

//여러가지 map 매서드
//
//사이즈
console.log(map.size);

//존재하는지
console.log(map.has("key1"));

//순회
map.forEach((value, key) => {
  console.log(key, value);
});

//찾기
console.log(map.get("key1"));
console.log(map.get("key2"));

//추가
map.set("key3", "kiwi");
console.log(map);

//삭제
map.delete("key3");

//전부삭제
map.clear();
console.log(map);

//오브젝트와의 차이점?
//구조상으로는 비슷하나, 사용하는 인터페이스가 살짝 다름.
const key = { name: "milk", price: "10" };
const milk = { name: "milk", price: "10", description: "good" };
const obj = {
  [key]: milk,
};
console.log(obj);
//
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]); //map은 이런식으로 접근 불가능, undefined 출력
console.log(map2.get(key));

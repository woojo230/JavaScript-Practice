//Symbol
//유일한 키를 생성할 수 있음
//Tip: 함수에 변수를 전달하면 어떻게 된다? 변수의 이름 자체가 전달되는게 아니라, 변수가 가리키고 있는 값이 인자로 전달된다.
const map = new Map();
//const key1 = "key";
//const ket2 = "key";
map.set(key1, "hello");
console.log(map.get(key2)); //출력값 hello
console.log(key1 === key2); //true
//
const key1 = Symbol("key");
const ket2 = Symbol("key");
console.log(key1 === key2); //false

//동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); //true

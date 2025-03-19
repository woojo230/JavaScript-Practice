//얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
//자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐
//정리하자면 store1 에는 2자리의 메모리 공간이 생기고, 각각의 메모리에 pizza와 ramen의 "주소"가 전달되어짐.
//store2 도 마찬가지임으로 두개의 서로 다른 배열의 데이터는 동일한 객체의 주소를 가리키고 있음.
//전에 배운 객체의 할당과 메모리의 관련을 생각해보면 당연한 것임.

const pizza = { name: "pizza", price: 2 };
const ramem = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);

pizza.price = 4;
console.log(store1); //pizza=4
console.log(store2); //pizza=4

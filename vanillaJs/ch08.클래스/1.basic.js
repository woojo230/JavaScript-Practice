//객체를 손쉽게 만들 수 있는 템플릿
//1. 생성자 함수(오래된, 고전적인 방법)
//2. 클래스(현업에서 자주 사용)

function Fruit(name, color) {
  this.name = name;
  this.color = color;
  this.display = () => {
    console.log(`${this.name}:${this.color}`);
  };
  return this; //생략 가능
}

//생성자 함수 호출
//< apple과 orange는 객체이고, 그 어떤 클래스의 인스턴스도 아니다. >
const apple = new Fruit("apple", "red");
const orange = new Fruit("orange", "c-orange");

//클래스를 사용해서 변환
class Fruit1 {
  //생성자(constructor): new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  //객체 안에서 사용하는 맴버함수가 있다면 function 키워드 필요없이 다음과 같이 구현하면 됨.
  display = () => {
    console.log(`${this.name}:${this.color}`);
  };
}

//생성자 함수 호출 방식은 똑같음.
//< apple1과 orange1 Fruit 클래스의 인스턴스이다. >
const apple1 = new Fruit1("apple1", "red");
const orange1 = new Fruit1("orange1", "c-orange");

console.log(apple);
console.log(orange);
console.log(apple1);
console.log(orange1);

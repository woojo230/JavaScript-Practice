//static 정적 프로퍼티, 매서드를 R A보자
//인스턴스 레벨 : 인스턴스를 통해서만 함수 외부에서 접근(호출) 가능

//클래스 레벨 : 인스턴스를 통하지 않고, 클래스 이름을 통해서만 함수 외부에서 접근(호출) 가능
//static으로 선언된 클래스 레벨의 프로퍼티나 매서드는, 생성된 인스턴스 안에는 들어있지 않음.
//따라서 클래스의 이름을 통해서만 접근 가능

class Fruit {
  //인스턴스 레벨의 매서드
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  display = () => {
    console.log(`${this.name}:${this.color}`);
  };

  //클래스 레벨의 프로퍼티
  //인스턴스 레벨에서 접근 불가능, 클래스의 이름을 통해서만 접근 가능
  static MAX_FRUIT = 4;

  //클래스 레벨의 매서드
  static makeRandomFruit() {
    //클래스 레벨의 매서드에서는 this를 참조할 수 없음.
    return new Fruit("banana", "노랑");
  }
}

//클래스 레벨의 함수는 클래스 이름으로만 접근이 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

//인스턴스 레벨의 함수와 프로퍼티는 만들어진 인스턴스를 통해서 접근이 가능.
const apple = new Fruit("apple", "빨강");
const orange = new Fruit("orange", "주황");
console.log(apple.name); //O
//console.log(Fruit.name); //X
//Fruit.display; //X

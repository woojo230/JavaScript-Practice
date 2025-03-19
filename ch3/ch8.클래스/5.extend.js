class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹기");
  }
  sleep() {
    console.log("자기");
  }
}

//Animal 클래스를 그대로 상속받는 Tiger 클래스
class Tiger extends Animal {}
const tiger = new Tiger("노랑");
console.log(tiger);
tiger.sleep();
tiger.eat();

//Animal 클래스를 그래도 상속받으며 기능이 추가된 Dog 클래스
class Dog extends Animal {
  //부모 클래스를 상속받은/ 자식 클래스에서 생성자를 구현할때/
  //부모 클래스에서 구현한 생성자의/ 매개변수(color)를 받아와야함.
  constructor(color, owner) {
    super(color); //super은 내가 상속하고 있는 부모 클래스를 가리킴.
    this.owner = owner;
  }
  play() {
    console.log("놀자");
  }

  //오버라이딩
  eat() {
    super.eat(); //부모 클래스의 eat함수가 실행됨.
    console.log("개같이 먹는다");
  }
}
const dog = new Dog("검정", "길동");
console.log(dog);
dog.sleep();
dog.eat(); //덮어씌워진, 자식 클래스에서 생성한 eat()함수가 실행됨(오버라이딩)
dog.play();

//접근제어자 - 캡슐화
//C++과 private, public, proteced 동일 개념, But 키워드가 다름.
//private(#), public(기본값), protected 를 통해 접근 제어 가능.
class Fruit {
  #name; //생성자 Construcuor 가 있기 때문에 생략 가능
  #color; //생성자 Construcuor 가 있기 때문에 생략 가능
  type = "과일";
  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }
  #display = () => {
    console.log(`${this.name}:${this.color}`);
  };
}

const apple = new Fruit("apple", "빨강");
//apple.#name = "오렌지"; //#feild는 외부에서 접근이 불가능함.
console.log(apple);

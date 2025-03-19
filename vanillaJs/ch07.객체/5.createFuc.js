// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:'사과'`); //객체 내부에서 키워드에 접근하려면 this를 붙여줘야함.
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:'오렌지'`);
//   },
// };

//생성자 함수 선언 및 구현
//생성자 함수의 이름은 대문자로 시작해야 함.
//this.name하는 순간 name이라는 키워드를 가진 객체가 생성됨.
function Fruit(name, color) {
  this.name = name;
  this.color = color;
  this.display = () => {
    console.log(`${this.name}:${this.color}`);
  };
  return this; //생략 가능
}

//생성자 함수 호출
const apple = new Fruit("apple", "red");
const orange = new Fruit("orange", "orange");

//constructor - super 이용하는 문법
//static 이용하는 문법
//get 키워드 - 호출하는 방식
//상속개념

class Employee {
  constructor(name, major, hours, pay) {
    this.name = name;
    this.major = major;
    this.hours = hours;
    this.pay = pay;
  }
  get calculator() {
    return this.hours * this.pay;
  }
}

class fullTime extends Employee {
  static #pay = 10000;
  constructor(name, major, hours) {
    super(name, major, hours, fullTime.#pay);
  }
}

class partTime extends Employee {
  static #pay = 8000;
  constructor(name, major, hours) {
    super(name, major, hours, partTime.#pay);
  }
}

const person1 = new fullTime("우", "인사과", 40);
const person2 = new partTime("김", "수선과", 30);
console.log(person1);
console.log(person1.calculator);
console.log(person2);
console.log(person2.calculator);

class timeJob {
  constructor(name, major, workTime) {
    this.name = name;
    this.major = major;
    this.workTime = workTime;
  }
  get calculator() {
    return this.workTime * 10000;
  }
}

class partTimeJob extends timeJob {
  constructor(name, major, workTime) {
    super(name, major, workTime);
  }
  get calculator() {
    return this.workTime * 8000;
  }
}

const person1 = new timeJob("우", "인사과", 40);
const person2 = new partTimeJob("김", "수선과", 30);
console.log(person1);
console.log(person1.calculator);
console.log(person2);
console.log(person2.calculator);

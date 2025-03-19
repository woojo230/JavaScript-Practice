//Getter & Setter
//접근자 프로퍼티라고 부름
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  tempName(value) {
    console.log(value);
  }

  //접근
  get fullName() {
    return `${this.firstName}${this.lastName}`;
  }

  //할당
  set fullName(value) {
    console.log(value);
  }
}

//일반함수, getter, setter에 따른 호출방식의 차이.
const student = new Student("김", "수지");

console.log(student.tempName("안녕"));
console.log(student.fullName); //// 접근시에는 get 키워드가 붙어있는 함수로 이동.
student.fullname = "홍길동"; //할당시에는 set 키워드가 붙어있는 함수로 이동.

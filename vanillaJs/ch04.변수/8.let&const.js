//let은 재할당이 가능한 변수, const는 재할당이 불가능한 변수
let a = 3;
a = "d"; //문제없음

const b = 3;
b = "d"; //오류발생

//const와 객체의 관계
const apple = {
  name: "apple",
  color: "red",
};
apple.name = "orange"; //문제없음 -> apple은 객체 데이터가 담겨진 주소를 가리키고 있기 때문.
//따라서 apple안에 있는 주소는 변경할 수 없지만 apple안에 담겨져 있는 주소가 가리키는/ 주소의 데이터는 얼마든지 재할당이 가능.

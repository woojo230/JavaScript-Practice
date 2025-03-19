//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨.
//매개변수의 기본값(Default parameters) 설정 가능.
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

add(1, 2, 3);

//rest 매개변수
//매개변수로 몇개를 받아올지 모르는 상황에서 rest 매서드를 사용할 수 있음.
//매개변수로 넘긴 값들이 배열로서 저장됨.
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

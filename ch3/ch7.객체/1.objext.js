//객체를 만드는법 두가지
//1.Object literal { key:value }; (객체 리터럴 사용)
//2.new Object(); (생성자 함수 사용)
//3.Object.create(); (내장매서드 사용)

let apple = {
  name: "apple",
  0: 1,
  ["hello-bye"]: "hello",
};

//속성(데이터)에 접근하기 위한 방법
apple.name; //마침표 표기법
apple["name"]; //대괄호 표기법
console.log(apple["hello-bye"]); //대괄호 표기법

//속성추가
apple.color = "red";
console.log(apple.color);
console.log(apple["color"]);

//속성삭제
delete apple.color;

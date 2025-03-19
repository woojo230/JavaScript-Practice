//데이터 타입(단일 데이터 / 복합 데이터)
//단일 데이터 -> 원시(primitive) : number(정수), string(문자열), boolean, null, undefined, symbol
//복합 데이터 -> 객체(object) : object, function

//원시
let a = 123;
//1. 임의의 메모리 주소에 123이 저장되고, a는 해당 주소를 가리킴.

//객체
let b = {
  name: "우정혁",
  age: 24,
};
//1. 임의의 메모리 주소(c)에 객체 데이터가 저장됨.
//2. 임의의 메모리 주소(d)에는 c의 주소가 담겨있음.
//3. b는 d의 주소를 가리킴

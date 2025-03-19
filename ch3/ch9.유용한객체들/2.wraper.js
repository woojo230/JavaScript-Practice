//래퍼 객체(Wraaper Object)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123; //number 원시 타입

//내장 함수를 사용하는 순간, number 원시타입을 감싸고 있는 number 객체로 감싸짐.
console.log(number.toString); //Number 객체타입으로 감싸짐
console.log(number); //원시타입

const text = "text";
console.log(text); //string 문자열 원시타입
text.length; //String 객체타입으로 감싸짐

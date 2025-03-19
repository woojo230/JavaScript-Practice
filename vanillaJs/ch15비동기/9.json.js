//Json: JavaScript Object Notation
//서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
//오브젝트 형태의 텍스트 포맷
//stringify(object): JSON -> 오브젝트 데이터를 서버로 보내기 전에 json형태(문자열)로 변환하여 서버로 보내고
//parse(JSON): object -> 서버로부터 json을 받는다면 parse를 통해서 json 형태(문자열)를 오브젝트 형태의 데이터로 받을 수 있음
const woo = {
  name: "name",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

//직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(woo);
console.log(woo);
console.log(json);

//역직렬화 Deserializing: 문자열 데이터를 자바스크립트 갹체로 변환
const obj = JSON.parse(json);
console.log(obj);

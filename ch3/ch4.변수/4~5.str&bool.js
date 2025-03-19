//템플릿 리터럴
let id = "엘리";
let greetings = "안녕, " + id + "have a nice day";
console.log(greetings);

//템플릿 리터럴을 사용하면 코드의 가독성을 높힐 수 있다.
//변수에 할당된 값을 ${변수}와 같이 표현할 수 있다.
greetings = `안녕, ${id} 즐거운 하루 보내!`;
console.log(greetings);

//Falsy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

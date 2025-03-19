//Promise 객체 생성 및 사용법
//프로미스 객체는 Promise 생성자를 사용해서 생성
//생성된 promise객체는 반드시 executor라는 실행함수를 가지고 있어야 함.
//promise객체가 생성됨과 동시에 자동으로 executor 함수가 실행됨.

const executor = (resolve, reject) => {};
const promise = new Promise(executor);
console.log(promise);

//예시
const executor1 = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};
const promise1 = new Promise(executor1);

//then 매서드
//then매서드의 첫번째 인수로는 promise 객체가 fullfild 상태일때 실행되는 함수이고,
//두번째 인수는 promise 객체가 failed 상태일때 실행되는 함수임.
promise1 //
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

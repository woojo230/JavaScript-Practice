//프로미스 병렬 처리
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

//바나나와 사과를 같이 가지고 오기
//promise.all 병렬적으로 한번에 모든 Promise들을 실행
//promise를 배열로 전달하면 됨.
Promise.all([getBanana(), getApple()]) //
  .then((fruit) => console.log(fruit));

//Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log(fruit));

//오류 처리
Promise.all([getBanana(), getApple()], getOrange()) //
  .then((fruit) => console.log(fruit))
  .catch(console.log);

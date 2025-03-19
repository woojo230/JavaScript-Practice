//Async & await이란 프로미스 객체를 더 쉽게 사용할 수 있도록 도와주는 문법
//Async는 비동기 작업을 처리할때 사용하는 문법으로, promise객체를 반환하는 함수에 작성하는 함수임.
//어떠한 함수에 async키워드를 작성하면 그 함수는 항상 promise객체를 반환함.
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다");
    }, ms);
  });
};

//before async
const strat = () => {
  delay(3000).then((res) => {
    console.log(res);
  });
};

strat();

//after async + try.catch
const start1 = async () => {
  try {
    let result = await delay(3000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
start1();

//자바스크립트에서 비동기로 작업을 처리하는 방법 3가지
//1.setTimeout 매서드 사용
//2.Promise 객체 생성
//3.Async&await 사용

//setTimeout
//매개변수로는 'callback() & delayTime' 을 전달

const work = (callback /*callback()*/) => {
  setTimeout(() => {
    console.log("비동기");
    callback();
  }, 1000 /*delayTime*/);
};

//예제1
work(() => {
  console.log("종료");
});

const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 1000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

const workD = () => {
  console.log("workD");
};

workA();
workB();
workC();
workD();

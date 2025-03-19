const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

//해당방식으로 처리하면 workA가 끝날때까지 프로그램이 중지됨으로 총 18초 소요.
//따라서 프로미스를 병렬적으로 처리해야 할 필요가 있음.
// const start = async () => {
//   try {
//     let resultA = await workA();
//     let resultB = await workB();
//     let resultC = await workC();
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (err) {
//     console.log(err);
//   }
// };

//프로미스 병렬 처리
//Promise all 매서드
const start1 = async () => {
  try {
    let result = await Promise.all([workA(), workB(), workC()]);
    result.forEach((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

start1();

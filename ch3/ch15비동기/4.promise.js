//Promise 객체는 new 연산자를 사용해서 생성.
//비동기적인 일을 처리하다가 성공한다면 resolve 함수를, 실패하거나 오류가 발생한다면 reject 함수를 실행.

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("오류"));
    } //오류가 발생한 경우 reject 함수를 실행
    setTimeout(resolve, seconds * 1000); //성공한 경우 resolve 함수를 실행
  });
}

runInDelay(2)
  .then(() => {
    console.log("타이머 완료");
  }) //성공한다면 -> 필요한 일을 수행
  .catch(console.error) //실패한다면 -> 에러를 처리
  .finally(() => {
    console.log("끝났다");
  }); //최종적으로 무조건 호출

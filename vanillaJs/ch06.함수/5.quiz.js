function a(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

const b = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i * 2);
  }
};

const c = (num, a, b) => {
  a(num);
  b(num);
};

c(5, a, b);

//엘리쌤 답안
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleNum(num) {
  console.log(num * 2);
}

//둘이 같은 표현임
iterate(5, log);
iterate(5, (num) => {
  console.log(num);
});

//콜백함수 사용예시
setTimeout(() => {
  console.log("3초뒤 이 함수가 실행됩니다");
}, 3000);

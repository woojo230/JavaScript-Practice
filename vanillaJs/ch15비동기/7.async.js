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

async function fetFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetFruits() //
  .then((fruit) => {
    console.log(fruit);
  });

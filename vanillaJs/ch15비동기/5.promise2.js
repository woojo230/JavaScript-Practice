//프로미스 함수들을 이용해 조금 더 간편하게
function fetchEgg(chicken) {
  //return new Promise((resolve, reject)); 이런식으로도 할 수 있지만 조금 더 간편하게 작성 가능
  return Promise.resolve(`${chicken}=>🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=>🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음"));
  //return Promise.resolve(`🪴 => 🐔`);
}

getChicken()
  .catch((error) => {
    console.log(error.name);
    return "🐔";
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));

// getChicken()
// .catch(() => '🐔')
// .then(fetchEgg)
// .then(fryEgg)
// .then(console.log);
//이런식으로 간소화도 가능

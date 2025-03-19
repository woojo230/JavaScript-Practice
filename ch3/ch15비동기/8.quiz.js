function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error("can not find 🐓"));
}

async function makeFriedEgg() {
  let chicken;
  try {
    chiken = await getChicken();
  } catch {
    chiken = "🐔";
  }
  const egg = await fetchEgg(chiken);
  return fryEgg(egg);
}
makeFriedEgg().then(console.log);

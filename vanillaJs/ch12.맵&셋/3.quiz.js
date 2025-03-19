// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']
const temp = new Set(fruits);
console.log([...temp]);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
//
//for of 매서드 버전
const forOf = new Set([]);
for (const value of set1.values()) {
  if (set2.has(value)) {
    forOf.add(value);
  }
}
console.log(forOf);

//forEach 버전
//forEach문 내부에서 set2를 가져오기 위해서는 다음과 같이 일반함수로 감싸줘야함.
function machine(set1, set2) {
  const forE = new Set([]);
  set1.forEach((item) => {
    if (set2.has(item)) {
      forE.add(item);
    }
  });
  return forE;
}
console.log(machine(set1, set2));

//filetr버전
function fillterVersion(set1, set2) {
  const temp = [...set1].filter((item) => {
    return set2.has(item);
  });
  return new Set(temp);
}
console.log(fillterVersion(set1, set2));

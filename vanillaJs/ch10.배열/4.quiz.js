//Quiz 1
//const input = ["banana", "berry", "grape", "berry"];
transKiwi = (fruit, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == fruit) {
      arr[i] = "kiwi";
    }
  }
  return arr; //배열을 리턴해줘야 함.
};
//const output = transKiwi("berry", input);
//console.log(output);

//Quiz 2
countKiwi = (fruit, arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == fruit) {
      sum++;
    }
  }
  return sum;
};
//output = countKiwi("kiwi", input);
//console.log(output);

//Quiz 3
const input = ["banana", "berry", "grape", "berry"];
const temp = ["banana", "kiwi", "grape"];
const newArr = [];
Transition = (input, temp, newArr) => {
  for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < temp.length; k++) {
      if (input[i] == temp[k]) {
        newArr.push(input[i]); //새로운 배열에 중복되는 배열 값을 추가해주고
      }
    }
  }
  return newArr; //완료된 배열을 반환해 주어야 함. 당연하거야 신경쓰자
};
console.log(Transition(input, temp, newArr));

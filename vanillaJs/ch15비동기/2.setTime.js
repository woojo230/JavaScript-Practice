function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("2");
}
//1, 3, 2 순서로 출력됨.

function runInDelay(callback, seconds) {
  if (seconds < 0) {
    console.log("error");
  } else {
    setTimeout(callback, seconds * 1000);
  }
}
runInDelay(() => {
  console.log("타이머 완료");
}, 2);

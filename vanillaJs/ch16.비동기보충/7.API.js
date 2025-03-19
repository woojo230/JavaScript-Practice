//API 호출 with .json()
let response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log(response);

const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

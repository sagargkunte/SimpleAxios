// const { default: axios } = require("axios");
// ! Here i have commented the require function because i am directly importing in browser ,see in index.html in line 10.
// ! If you import axios you should run node file_name in your terminal.
// ! Axios are like express.js import and use it before that install it.
console.log("HELLO THERE");
// API = https://jsonplaceholder.typicode.com CHECK HERE
function handle(res) {
  console.log(res);
}


// GET Request
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log("Getting ....");
    handle(res);
  })
  .catch((err) => console.log(err));


// POST Request
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    userId: 11,
    id: 101,
    title: "Hello this is created by sagar",
    body: "this is random data just to send post request",
  })
  .then((res) => {
    console.log("Posting ....");
    handle(res);
  })
  .catch((err) => console.log(err));


// PUT Request
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    userId: 12,
    id: 102,
    title: "Hello this is created by sagar",
    body: "this is random data just to send put request",
  })
  .then((res) => {
    console.log("Putting ....");
    handle(res);
  })
  .catch((err) => console.log(err));


// DELETE Request
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log("Deleting ....");
    handle(res);
  })
  .catch((err) => console.log(err));

// function fun() {
//   console.log("hello  world");
// }

// fun();
// function greet(name) {
//   return "Ganesh";
// }
// console.log(greet("Dutt"));

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(23, 98));
// const multiply = (a, b) => a * b;
// console.log(multiply(12, 89));

// (() => console.log("hello"))();

// const supplementsDiscount = (price, discount) => {
//   let discountAmount = (price * discount) / 100;
//   let finalPrice = price - discountAmount;
//   return console.log(
//     "final price after ",
//     discountAmount,
//     " % discount ",
//     finalPrice,
//   );
// };

// supplementsDiscount(100, 20);

// function checkAuth(isLoggedIn) {
//   if (isLoggedIn) {
//     return "Welcome to the Dashboard";
//   } else {
//     return "please signIn first";
//   }
// }
// let useLogged = true;
// console.log(checkAuth(useLogged));

let user1 = { name: "Ganesh" };
let user2 = { name: "Kartik" };

function welcome(city, expertise) {
  console.log(`hello ${this.name} from ${city} expert in ${expertise}`);
}
// welcome.call(user2, "Delhi", "MERN");
// welcome.apply(user2, ["Delhi", "FS"]);
let newFunction = welcome.bind(user1, "Noida", "Training");
newFunction();

// apply(this,[arg1,arg2])
// let value = "Hello";
// console.log(value, "ganesh");
// console.log(`${value} Ganesh Dutt`);

// let a = [12, 34, 23, 45, "js"];
// let mixedArray = ["hello", 23, 45, true, null, { name: "ganesh dutt" }];
// a[4] = 89;
// console.log(a.length);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
// for (let x of mixedArray) {
//   console.log(x);
// }

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);

let firstArray = [1, 2, 34, 567, 654, 32];
// let sum = 0;

// for (let x of arr) {
//   sum += x;
// }
// console.log(sum);

function findMaxValue(arr) {
  if (arr.length === 0) {
    return "Array khali hai";
  }
  let maxNumber = arr[0];

  for (let x of arr) {
    if (x > maxNumber) {
      maxNumber = x;
    }
  }
  return maxNumber;
}

let array1 = [24, 5, 667, 56, 244, 22, 23, 676, 999];
// let output = findMaxValue(firstArray);
// console.log(output);
console.log(findMaxValue(array1));

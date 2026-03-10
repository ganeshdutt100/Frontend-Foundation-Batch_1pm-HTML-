// Q4. Reverse an Array (Into a New Array)
// Create a new array that contains the elements of the original array in reverse order.

// Input: [1, 2, 3, 4, 5]

// Expected Output: [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5];
let reversed = [];
let index = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  reversed[index] = arr[i];
  index++;
}
console.log(reversed);

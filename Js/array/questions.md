Q1. Find the Minimum Number
Find the smallest number in a given array.

Input: [34, 15, 88, 2, 10]

Expected Output: 2

Hint: Assume the first element is the minimum (let min = arr[0]). Loop through the array, and if you find a number smaller than min, update your min variable.

Q2. Count the Occurrences of a Target Number
Count how many times a specific target number appears in the array.

Input: Array = [1, 2, 4, 2, 5, 2], Target = 2

Expected Output: 3

Hint: Create a variable count = 0. Loop through the array, and every time the current element matches the target, do count++.

Q3. Calculate the Average of an Array
Find the mathematical average of all the numbers in the array.

Input: [10, 20, 30, 40]

Expected Output: 25

Hint: Use a loop to calculate the total sum of all elements first. After the loop ends, divide that sum by arr.length.

Q4. Reverse an Array (Into a New Array)
Create a new array that contains the elements of the original array in reverse order.

Input: [1, 2, 3, 4, 5]

Expected Output: [5, 4, 3, 2, 1]

Hint: Create an empty array let reversed = [] and a counter variable let index = 0. Run a for loop backwards from the end of the original array (arr.length - 1 down to 0) and assign values: reversed[index] = arr[i], then index++.

Q5. Check if an Array is a Palindrome
A palindrome reads the same forwards and backwards. Return true if it is, false otherwise.

Input 1: [1, 2, 3, 2, 1] ➔ Output: true

Input 2: [1, 2, 3, 4, 5] ➔ Output: false

Hint: Loop through the first half of the array. Compare arr[i] with the element at the opposite end arr[arr.length - 1 - i]. If they don't match, return false immediately.

Q6. Remove a Specific Target Element
Create a new array that contains all elements of the original array except the target value.

Input: Array = [5, 10, 5, 20, 30], Target = 5

Expected Output: [10, 20, 30]

Hint: Create an empty array newArr = [] and an index = 0. Loop through the original array. If arr[i] !== target, add it to newArr like this: newArr[index] = arr[i], and then increase index.

Q7. Find the Second Largest Number
Find the second biggest number in the array.

Input: [12, 35, 1, 10, 34, 1]

Expected Output: 34

Hint: Use two variables: largest and secondLargest. Loop through the array. If you find a number bigger than largest, update secondLargest to be the old largest first, and then update largest.

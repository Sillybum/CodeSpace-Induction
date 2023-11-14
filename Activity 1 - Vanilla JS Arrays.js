const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // First make an array to calculate the sum of items of.
let sum = 0; // Make a variable to store the result of the calculation.

for (i=0; i < array1.length; i++) {  // Loop every item in array1 while adding them to sum.
    sum += array1[i];
}

console.log(sum);
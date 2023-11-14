const array1 = [20, 30, 25, 35, -16, 60, -100]; // First make an array to calculate the sum of items of.
let sum = 0; // Make a variable to store the result of the calculation.

for (i=0; i < array1.length; i++) {  // Loop every item in array1 while adding them to sum.
    sum += array1[i];
}

let average = sum / array1.length;  // Calculate the average value by dividing the sum by the total number of the itmes in the array.
console.log(average.toFixed(1));  // toFixed method rounds floating point numbers.
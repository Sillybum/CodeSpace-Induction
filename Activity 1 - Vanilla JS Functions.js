let sample_array = [10, 2, 3, 4, 7]; //Make a sample array.

function array_max(array) {  //Initialise a function that takes array as its arguement.
    console.log("The content of the array is: ", array);  //Print out the array.
    console.log("The max value in the array is: ", Math.max(...array));  //Print out the maximum value of the array.
}

array_max(sample_array);  //Calling the function to use it with an array as its arguement.
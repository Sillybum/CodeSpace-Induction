function cal_factorial(integer) {  //initialise the function
    if (integer < 0) {  //if the input is less than 0, the function prints an error message.
        console.log("Please enter a non-negative integer.");  // When a user enters negative value, it returns the sentence and terminate the operation.
    }  else if (integer == 0) {  // if the input is equal to 0, it prints 0;
        console.log(1);
    } else {
        let result = 1; //make a result variable.
        for (let i=1; i<=integer; i++) {  //use a for loop to multiply each integer to the result variable.
            result = result * i;
        }
        console.log(result);
    }
}
cal_factorial(6); //Call the function.
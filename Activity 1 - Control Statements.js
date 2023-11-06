let num1 = prompt("Inout first number", 2);
let num2 = prompt("Input second number", 3);
let num3 = prompt("Input third number", 4);

if (num1 == num2 && num1 == num3) {  //If num2 and num3 are equal to num1, they are equal to each other too.
    console.log("All numbers are equal"); 
} else if(num1 != num2 && num1 != num3 && num2 != num3) {   //The condition is only met when they are all different.
    console.log("All numbers are different");
} else {
    console.log("Neither all are equal or different");
}
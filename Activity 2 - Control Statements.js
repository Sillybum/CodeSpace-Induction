let num1 = prompt("Inout first number");
let num2 = prompt("Input second number");
let num3 = prompt("Input third number");

if(num1 == num2 && num1 == num3) { //If all the numbers are the same, it's neither increaing nor decreasing.
    console.log("Neither increasing or decreasing order");
} else if(num1 <= num2 && num2 <= num3) {  //Assuming they don't have the same one number, num1 is smaller or equal to num2 and so is num2 to num3.
    console.log("Increasing order");
} else if(num1 >= num2 && num2 >= num3) {   //Using the opposite opperator than the previous condition.
    console.log("Decreasing number");
} else {
    console.log("Neither increasing or decreasing order");
}
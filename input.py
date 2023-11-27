num1 = input("Input the first number: ") # use input function to get a user input
num2 = input("Input the second number: ")
result = int(num1) / int(num2) # any input input function gets turns into a string value. so it needs to be chnaged into an integer value before mathematic calculation. 
print("The division of the first number and the second number is: ", int(result)) # The division outputs a decimal number. int function changes the result into an integer.
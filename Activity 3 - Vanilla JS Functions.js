function prime_checker(num) {
    if (num <= 1) {
        return "The number you entered is not a prime number.";
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "The number you entered is not a prime number.";
            }
        return "The number you entered is a prime number."
        }
    }
}

console.log(prime_checker(5));
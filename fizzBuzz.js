// - Develop a function that accepts a number and evaluates the following conditions:
//           - If divisible by 3, return 'Fizz'.
//           - If divisible by 5, return 'Buzz'.
//           - If divisible by both 3 and 5, return 'FizzBuzz'.
//           - Otherwise, return the original number.

function divisor (number) {
    if (number % 3 === 0 && number % 5 ===0) {
        return "FizzBuzz";
    } else if (number % 5 === 0){
        return "Buzz";
    } else if (number % 3 === 0){
        return "Fizz"
    } else {
        return number;
    }
};


//onsole.log(divisor(15));
module.exports = {divisor};
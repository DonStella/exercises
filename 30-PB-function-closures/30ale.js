"use strict";
//Q1
function add(a) {
    return function two(b) {
        return a + b;
    }
}

console.log(add(3)(4));

// Q2.
let multiplier = function (num1) {
    return function two(num2) {
        return num1 * num2;
    }
}
// let myMultiply = multiplier();
console.log(multiplier(5)(6));


// Q3.
console.log((function (currentAge, retirementAge, salary, percentage) {
    // let age = currentAge;
    let retirementMonths = (retirementAge - currentAge) * 12;
    let wage = retirementMonths * salary;
    let percent = (percentage / 100) * wage;
    if (currentAge > retirementAge) {
        return "You're already retired!";
    }
    return percent;

})(75, 65, 2000, 5));
// if i don't return , console.log doesnt save. it will re run and recalculate the program again. even thou the person is retired!
// let/const has a scope called block scope (if/for loop/function block)
// what is hoiting: if I declare a variable with 'var' inside a block, then parent scope can also access the variable from outside
let bonus = 20; // Global variable

function sum(first, second){
    let result = first + second + bonus;
    console.log(result); // in scope
    console.log(bonus); // in scope
    if (result>9){
        const mood = 'Happy';
        console.log(mood);// in scope
    }
    console.log(mood); // out of scope
    return result;
    console.log(day);// it will show undefined, only var day is hoisting, not the value.
    var day = 'friday';
    console.log(month); // it will show error, cannot access before initialization
    let month = 'Februar';
}

const output = sum(3,6);
console.log(output);
console.log(result); // out of scope
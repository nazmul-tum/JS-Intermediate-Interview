// when variable not assigned
let name; 
console.log(name);

// when return is not called/ or just empty return someting
function add(num1, num2){
    console.log(num1 + num2)
    return 
}

// when a parameter is not passed during execution of the function 

function adding(num1, num2){
    return console.log(num1, num2);
}
console.log(add(12));

// When a non existant property is called 
const lover = { name: 'tom', phone: 546464};
console.log(lover.girlfriend)

// when someone defined a value called undefined 
let fun = undefined;
console.log(fun);

// so the difference between null and undefined is, undefined is a error we can get for several reason, but null is set-up by the developer for some specific reason. 
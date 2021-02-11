// Map
const numbers = [2,3,4,5,6,7,8];

const result = numbers.map(function (element){
    return element*element;
});

// Array function with map
const result1 = numbers.map(x => x*x);

console.log(result);
console.log(result1);

// Filter
const even = numbers.filter(function (element){
    if(element%2 === 0){
        return element;
    }
});

// filter function with Array function
const even1 = numbers.filter(x => x%2 === 0);

console.log(even);
console.log(even1);


// Find (only return the first one of argument)
const isThere = numbers.find(x => x>5);
console.log(isThere);
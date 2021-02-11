const array = [1,2,3,4,5,6,7,8,9];
const part = array.slice(2,5); // start, over

console.log(part); // make a new array
console.log(array); // original do not change

const removed = array.splice(2,5, 77,88,99); // start, number of element, rest are injects in the original

console.log(removed);
console.log(array); 

const together = array.join(''); // array to string
console.log(together);
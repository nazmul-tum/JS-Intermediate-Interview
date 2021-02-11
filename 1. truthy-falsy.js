// FALSY
// false
// 0
// ""
// undefined
// null
// NaN

// TRUTHY
// '0' ' ' [empty array] {empty object} 'false'


const age = 0; // apart from '0', every other value will call this conditon 'true'. 

if (age){
    console.log('Condition is true');
}
else{
    console.log('condition is false');
}


const name = 'Nazz' // For any string(even a whitespace), function will call --> true, for empty ('', null, undefined) string is --> false.
if (name){
    console.log('Condition is true');
}
else{
    console.log('condition is false');
}

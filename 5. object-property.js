const students = [
    { id: 21, name:'tom'},
    { id: 22, name:'diana'},
    { id: 23, name:'prince'},
    { id: 25, name:'donald'},
    { id: 27, name:'jerry'},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger23 = students.filter( s => s.id>= 23)
console.log(names, ids, bigger23);

// let name = [];
// for(let i = 0; i<students.length; i++){
//     const sName = students[i].name;
//     name.push(sName);  
// }

// console.log(name);
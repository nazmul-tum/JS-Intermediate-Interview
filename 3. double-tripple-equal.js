const first = 3;
const second = '3';
if(first == second){
    console.log('condition is true');

} else{
    console.log('condition is false');
}

// double equal do not check the typeOf, and tripple equal check the type and value
// if there are two type of value, double equal will try to convert the value and compare thereafter. 
// (true, 1) (false, 0) same in double equal 
const nums = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < nums.length; i++){
    
    if (nums[i]>6){
        break;
    }
    console.log(nums[i]);
}


const array = [1,2,-3,-4,5,-6,7,8,9];

for(let i = 0; i < array.length; i++){
    
    if (array[i]<0){
        continue;
    }
    console.log(array[i]);
}
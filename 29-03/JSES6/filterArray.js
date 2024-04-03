// Filtering Arrays

const numbers= [1,2,-1,-3];

let filtered= numbers.filter(function(value){
    return value >=0;
});

console.log(filtered);
// Object Cloning--> 1 Assign

let src ={
    a:10,
    b:20,
    c:30
};

let dest = Object.assign({},src);
console.log(dest);

// Object Cloning--> 2 Spread

const num ={
    a:10,
    b:20,
    c:30
}

let det= {...src};
console.log(det);

// Object Cloning-->3-Iteration

let value={
    a:10,
    b:20,
    c:30
}

let dat= {};
for(let key in value){
    dat[key]=value[key];

}
console.log(dat)


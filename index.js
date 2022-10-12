function one(arr){
    let tuple = [ , ]
    
    let random =  () => Math.floor(Math.random() * arr.length);

    tuple = [arr[random()], arr[random()]];

    return tuple;
}

let arr = [2, 3, 1, 66, 44, 21, 111];
console.log(one(arr));
const arr=[1,2,3,4];

/*for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/

/*for(let el for arr){
    console.log(el)
}

for(let index in arr){
    console.log(index)
}*/

const arr2 = arr.forEach((el, index) => {
    //console.log(el);
    //console.log('EL: '+ el +' index: '+ index);
    //console.log(`El: ${el} index: ${index}`);
})

console.log(arr2)

const arr3 = arr.map((el, index) => {
    //console.log(el);
    //console.log('EL: '+ el +' index: '+ index);
    //console.log(`El: ${el} index: ${index}`);
    return el *2;
})

console.log(arr3)


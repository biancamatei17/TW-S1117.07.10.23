// 1


//const arr= ['Hello ', 'World'];

/*const concatArray= (arr) => {
    return console.log(arr.join(''))
}

concatArray(arr);*/

// 2

/* function diffChars(str1, str2) {
    if(str1.length !== str2.length){
        return -1;
    }
    let counter = 0;

    for( let i=0; i< str1.length; i++){
        if(str1[i] === str2[i]){
            counter++;
        }
    }
    console.log(counter);
}

diffChars('abcd','adfd'); */

//3

/*function diffChars(str, char) {
    let counter = 0;

    for( let i=0; i< str.length; i++){
        if(str.charAt(i) === char){
            counter++;
        }
    }
    console.log(counter);
}

diffChars('text','t'); */

//4

/*function concatArrays(arr1, arr2){
    if(arr1.length !== arr2.length){
        return[];
    }
    let newArr = [];

    for(let i=0;i < arr1.length; i++){
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log(concatArrays([1,2,3],['a','b','c']))*/

//5

function calculateAvg(arr){
    
    let sum=0;

    for(let el of arr){

        sum+= el;

    }
    return sum/ arr.length;
}

console.log(calculateAvg([1,2,3]))


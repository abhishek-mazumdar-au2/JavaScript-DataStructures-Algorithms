// write a function in pure recursive style where the function takes in an array of numbers and returns the even values

returnEven = (arr) => {
    let final = [];
    if(arr.length === 0){
        return final;
    }
    if(arr[0]%2===0){
        final.push(arr[0])
    }
    final = final.concat(returnEven(arr.splice(1)))
    return final
}

console.log(returnEven([1,2,3,4,5,6,7,8,9,10]));

// write a function in pure recursive style where the function takes in an array of numbers and returns the odd values

pureRecursion = (arr) => {
    let final = [];
    if(arr.length === 0){
        return final
    }
    if(arr[0] % 2 !== 0){
        final.push(arr[0])
    }
    final = final.concat(pureRecursion(arr.slice(1)))
    return final
}

console.log(pureRecursion([1,2,3,4,5,6,7,8,9,10]))
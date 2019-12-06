
// Write a function called productOfArray which takes in an array of numbers and 
// returns the product of them all.


products = (arr) => {
    if(arr.length === 0){
        return 1
    }
    return arr[0]*products(arr.slice(1));
}

console.log(products([1,2,3,4,5]))
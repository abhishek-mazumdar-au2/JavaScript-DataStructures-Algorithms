// Write a function which accepts two arrays and returns true if the other array is a squared array to the prior.

//  arr1        arr2     return 
//[1,2,-3]    [1,4,9]     true

checkSq = (arr1, arr2) => {
    if(arr1.length!==arr2.length){
        return 'Match not found.'
    }
    for(let i = 0; i <= arr1.length; i++){
        var correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1){
            return 'Match Not found.'
        } arr2.splice(correctIndex, 1)
        console.log(arr2);
        if(arr2.length===0){
            return true
        }
    } 
}

console.log(checkSq([1,2,3,2], [1,4,9,-9]));
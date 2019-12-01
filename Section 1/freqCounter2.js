// Write a function which accepts two arrays and returns true if the other array is a squared array to the prior.

//  arr1        arr2     return 
//[1,2,-3]    [1,4,9]     true
 checkArr = (arr1, arr2) => {
     if(arr1.length!==arr2.length){
         return false
     }
     let c1 = {};
     let c2 = {};
    for(let val of arr1){
        c1[val] = (c1[val] || 0) + 1;
    } 
    for(let val of arr2){
        c2[val] = (c2[val] || 0) + 1;
    }
    console.log(c1)
    console.log(c2)
    for(let key in c1){
        if(!(key**2 in c2)){
            return false;
        }
        if(c1[key]!==c2[key**2]){
            return false
        }
    }return true

 }

 console.log(checkArr([1,2,3,1,5], [1,4,9,1,25]));
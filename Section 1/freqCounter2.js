// Write a function which accepts two arrays and returns true if the other array is a squared array to the prior.

//  arr1        arr2     return 
//[1,2,-3]    [1,4,9]     true
 checkArr = (arr1, arr2) => {
     if(arr1.length!==arr2.length){
         return false
     }
     let c1 = {};
     let c2 = {};
     for (let i of arr1){
         c1[i] = (c1[i] || 0) + 1;
     }console.log(c1);

     for (let i of arr2){
        c2[i] = (c2[i] || 0) + 1;
    }console.log(c2);
    console.log(Object.keys(arr1))
    console.log(Object.keys(arr2))

 }

 checkArr([1,2,3,1,5], [1,2,3,1,7]);
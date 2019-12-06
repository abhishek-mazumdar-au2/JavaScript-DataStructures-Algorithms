// helperMethod = (input) => {

//     let finalArr = [];
//     innerFunction = (input) => {
//         if(input.length === 0){
//             return 
//         }
//         if(input[0]%2!==0){
//             finalArr.push(input[0])
//         }
//         return innerFunction(input.slice(1))
//         return innerFunction(input-1)
//     }
//     return finalArr
// }

// console.log(helperMethod(8));

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// function collectOddValues(arr){
    
//     let result = [];

//     function helper(helperInput){
//         if(helperInput.length === 0) {
//             return;
//         }
        
//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
        
//         helper(helperInput.slice(1))
//     }
    
//     helper(arr)

//     return result;
// }

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

collectEvenValues = (arr) => {
    let finalArr = []
    inner = (arrInput) => {
        if(arrInput.length === 0){
            return
        }
        if(arrInput[0]%2 === 0){
            finalArr.push(arrInput[0]);
        }
        inner(arrInput.slice(1));

    }
    inner(arr)
    return finalArr;
}
console.log(collectEvenValues([1,2,3,4,5,6,7,8,9,10,11,12]));
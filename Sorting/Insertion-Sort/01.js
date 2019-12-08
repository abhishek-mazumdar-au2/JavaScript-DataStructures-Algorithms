insertionSort = (arr) => {
    for(var i = 1; i < arr.length; i++){
        const currentVal = arr[i];
        for(var j = i - 1; j >= 0; j--){
            if(arr[j]>currentVal){
                arr[j+1]=arr[j]
            }else{break}
        }
        arr[j+1] = currentVal;
        console.log(arr, currentVal, arr[j], arr[j+1]);
    }
    return arr;
}
console.log(insertionSort([ 1 , 4 , 4, 5, 3 ])) 
  //                           j      i    cV=4    
// [  5, 5, 5, 6, 7 ]
// j           i      cV=3 
//   function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])
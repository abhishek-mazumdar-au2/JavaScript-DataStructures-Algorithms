// selectionSort = (arr) => {
//     var min, noSwap;

//     for(var i = 0; i < arr.length; i++){
//         let min = i;
//         noSwap = true;
//         for(var j = i+1; j < arr.length; j++){
//             console.log(i, j);
//             if( arr[j] < arr[min] ){
//                 // change min
//                 min = j;
//                 noSwap = false;
//             }
//         }
//         // SWAP
//         const temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp
//         if (noSwap) {
//             break;
//         }
//     }
//     return arr
// }
// //               m
// // [ 1 , 2 , 3 , 3 , 7 ] 
// //               i   j
// console.log(selectionSort( [7,3,2,3,1,10,39,8,2,1,3,-3,32,2] ));
              

    selectionSort = (arr) => {
        let swap = false;
            count = 0;
for(var i = 0; i<arr.length; i++){
    let m = i;
    for(var j = i+1; j<arr.length; j++){
        if(arr[j]<arr[m]){
            m = j;
            count ++
            swap = true;
            console.log(arr);
        }
        if(swap===false){
            break
        }
    }
    // SWAP
    const temp = arr[i];
    arr[i] = arr[m];
    arr[m] = temp;
    
}
    return ({arr, count})

}
console.log(selectionSort([ -3 , 3 , 2 , 3 , 1 , 10 , 39 , 8 , 2 , 1 , 3 , 7 , 32 ,2 ]))
//        m
// [ -3 , 3 , 2 , 3 , 1 , 10 , 39 , 8 , 2 , 1 , 3 , 7 , 32 ,2 ]
//        i   j
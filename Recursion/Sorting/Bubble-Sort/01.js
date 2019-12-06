bubbleSort = (arr) => {
    for(var i = 0; i <= arr.length; i++){
        for(var j = 0; j <= arr.length; j++){
            console.log(arr[j], arr[j+1]);
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                // SWAP
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([ 3 , 4 , 3 , 3 , 4 , 5 , 7 , 4 , 4 , 5 , 2 ]));

bubbleSortOptimized = (arr) => {
    for(var i = arr.length; i >= 0; i--){
        for(var j = 0; j < i-1; j++){
            console.log(arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                // SWAP
                const temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSortOptimized([ 3 , 4 , 3 , 3 , 4 , 5 , 7 , 4 , 4 , 5 , 2 ]));



//                       j
// [ 3 , 4 , 3 , 3 , 4 , 5 , 7 , 4 , 4 , 5 , 2 ]
//   i
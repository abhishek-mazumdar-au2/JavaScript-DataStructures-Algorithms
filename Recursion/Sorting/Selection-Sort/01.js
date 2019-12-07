selectionSort = (arr) => {
    var min, noSwap;

    for(var i = 0; i < arr.length; i++){
        let min = i;
        noSwap = true;
        for(var j = i+1; j < arr.length; j++){
            console.log(i, j);
            if( arr[j] < arr[min] ){
                // change min
                min = j;
                noSwap = false;
            }
        }
        // SWAP
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
        if (noSwap) {
            break;
        }
    }
    return arr
}
//               m
// [ 1 , 2 , 3 , 3 , 7 ] 
//               i   j
console.log(selectionSort( [7,3,2,3,1,10,39,8,2,1,3,-3,32,2] ));
              
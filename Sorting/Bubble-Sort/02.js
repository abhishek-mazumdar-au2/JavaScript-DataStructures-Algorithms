// some practice

bubbleSort = (arr) => {
    for(var i = 0; i <= arr.length; i++){
        for(var j = 0; j <= arr.length; j++){
            console.log(arr[i], arr[j]);
            if(arr[j]>arr[j+1]){
                //SWAP
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

 console.log(bubbleSort([8 , 1 , 2 , 10 , 8 , 9 ]));

bubbleSort2 = (arr) => {
    var noSwaps;
    for(var i = arr.length; i >= 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }if(noSwaps){break;}
    }return arr
}

console.log(bubbleSort2([8 , 1 , 2 , 10 , 8 , 9]));

  
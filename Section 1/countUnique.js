// Take in a sorted array of numbers. Return the unique numbers in them.
//     i  
// [1, 2, 2, 4, 4, 5, 6, 7]
//           j
unique = (arr) => {
    var i = 0;
    var j = 1;
    while(j<arr.length && i<j){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j]
        }if(arr[i]===arr[j]){
            j++
        }
    }console.log(arr);
    console.log(arr.splice(0, i+1));
}

unique([1, 2, 2, 4, 4, 5, 6, 7, 9, 11, 11, 12, 12, 13 ,13])
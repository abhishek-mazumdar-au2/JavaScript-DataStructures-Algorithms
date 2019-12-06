
// Write a function called binarySearch which accepts a sorted array 
// and a value and returns the index at which the value exists. 
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - 
// you can read how to implement it here - 
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
// and here - 
// https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1


binarySearch = (arr, n) => {
    // have two pointers..one at the beginning other at the end call them i=0 and j=arr.length respectively
    let i = 0;
    let j = arr.length - 1;
    //fix the point in the middle
    let middle = Math.floor((i+j) / 2);
    while(arr[middle]!==n && i <= j){
        if(arr[middle] > n){
            j = middle - 1;
            middle = Math.floor((i + j)/2)
        }else if(arr[middle] < n){
            i = middle + 1;
            middle = Math.floor((i + j)/2)
        }
    }
    if(arr[middle]===n){
        return middle
    } 
       return -1
    
    
}

console.log(binarySearch([1,2,3,4,5,6,7],9));
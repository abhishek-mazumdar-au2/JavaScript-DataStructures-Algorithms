collectMultiples = (array, num) => {
    let finalArray = [];
    inner = (arr, n) => {
        if(arr.length===0){
        return 
    }
    if(arr[0]%n===0){
        finalArray.push(arr[0])
    }
    inner(arr.splice(1), n)
    }
    inner(array, num)
    return finalArray;
}

console.log(collectMultiples([1,2,3,4,5,6,7,8,9], 3));
merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
        while(i<arr1.length){
            result.push(arr1[i])
            i++
        }
        while(j<arr2.length){
            result.push(arr2[j])
            j++
        }
        return result
    }


breakArray = arr => {
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = breakArray(arr.slice(0, mid));
    let right = breakArray(arr.slice(mid));
    return merge(left, right)
}

console.log(breakArray([2,3,2,1,2,3,4,5,6,6,4,2,3,4,8,5,4,3]));
merge = (arr1, arr2) => {
    var results = []
    var i=0, j=0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++
        }else{
            results.push(arr2[j])
            j++
        }
    }
    while( i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while( j < arr2.length){
        results.push(arr2[j])
        j++
    }
    return(results);
}

breaking = arr => {
    if(arr.length<=1) return arr
    let mid = arr.length/2;
    let left = breaking(arr.slice(0, mid))
    let right = breaking(arr.slice(mid))
    return merge(left, right);
    }
            // i                                         j
console.log(breaking([ 1 , 3 , 4 , 5 , 6 , 21, 1 , 3 ] ));
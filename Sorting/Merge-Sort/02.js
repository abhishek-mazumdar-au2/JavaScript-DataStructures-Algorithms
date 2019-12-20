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
    console.log(results);
}
                // i                                         j
merge([ 1 , 3 , 4 , 5 , 6 , 21 ] ,  [ 8 , 21 , 32 , 33 , 40 ])
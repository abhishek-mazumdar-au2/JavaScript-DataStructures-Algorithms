var counter = 0
breakIntoHalves = (arr) => {
    const firstHalve = arr.slice(0, arr.length/2);
    const secondHalve = arr.slice(arr.length/2, arr.length);
    // console.log(firstHalve, secondHalve);\
    while(counter===0){
        console.log(breakIntoHalves(firstHalve))
        conter++
    }
    while(counter===0){
        console.log(breakIntoHalves(secondHalve))
        counter++
    }
}
arr = [3, 1,7,2,2, 4, 2,10]

console.log(breakIntoHalves(arr))
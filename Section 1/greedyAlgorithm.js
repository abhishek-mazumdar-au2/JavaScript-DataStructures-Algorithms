var counter = 0
check5 = (num) => {
    if(num>5){
        console.log('changes of 5c = '+Math.floor(num/5));
        counter += Math.floor(num/5);
        console.log('changes of 1c = '+num%5);
        counter += (num%5);
        console.log("total number of coins "+counter);
    }else{
        console.log(`${num} is Less than 5`)
        counter += num;
        console.log('total no. of coins = '+counter);
    }
}
check10 = (num) => {
    if(num>10){
        console.log('changes of 10c = '+Math.floor(num/10));
        counter += Math.floor(num/10)
        check5(num%10)
    }else{
        check5(num)
    }
}
check25 = (num) => {
    if(num>25){
        console.log('changes of 25c = '+Math.floor(num/25));
        counter += Math.floor(num/25)
        check10(num%25)
    } else{
        check10(num)
    }
}
greedyAlgo = (n) => {
       check25(n)
}

console.log(greedyAlgo(83));
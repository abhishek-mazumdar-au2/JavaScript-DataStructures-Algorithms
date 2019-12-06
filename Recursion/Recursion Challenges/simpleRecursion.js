simpleRecursion = (num) => {
if(num <= 0){
    console.log('And now the counter is: '+num);
    return
     
 }
 num--;
if(num > 0) console.log('counter is: '+num);
simpleRecursion(num)
}
   

simpleRecursion(4)
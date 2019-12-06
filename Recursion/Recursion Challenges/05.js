
// Write a recursive function called fib which accepts a number 
// and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... 
// which starts with 1 and 1, and where every number thereafter is equal to the sum of the 
// previous two numbers.

fib = (num) => {
    let org = [1, 1];
    let l = org.length;
    org = org + org.concat(org[l]+org[l-1])
    return org
}

console.log(fib());
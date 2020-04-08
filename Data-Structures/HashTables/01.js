hash = (key, arrayLen) => {
    let char = key;
    let total = 0;
    for(var i=0; i < Math.min(char.length,100); i++){
        total += char.charCodeAt(i)-96
        
    }
    let a = 31
    // return a
    return (a*total)%arrayLen
    // return total%arrayLen
}

console.log(hash("iorangsh", 12));
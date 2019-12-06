// NAIVE string search
// Accept two strings. Str1 and Str2
// Check if Str2 is a sub-string of str1.
// If yes return the number of such occurences.
// else return -1

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
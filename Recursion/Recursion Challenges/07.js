
// Write a recursive function called isPalindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

isPalindrome = (string) => {
    if(string.length < 1){
        return string
    }
    const reversed = isPalindrome(string.slice(1)) + string[0];
    if(reversed===string){
        console.log('true')
    }else{
        console.log('false');
    }
}

isPalindrome('olleh');
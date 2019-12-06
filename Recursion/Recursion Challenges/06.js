
// Write a recursive function called reverse which accepts a string 
// and returns a new string in reverse.

reverse = (str) => {
    if(str.length <= 1) return str;
	return  reverse(str.slice(1)) + str[0] ;
}

console.log(reverse('desrever'));

rever = (str) => {
    if(str.length < 1){
        return str
    }
    return rever(str.slice(1)) + str[0]
}

console.log(rever('olleh'))
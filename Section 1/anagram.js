checkIfAnagram = (str1, str2) => {
    if(str1.length!==str2.length){
        return false;
    }
    let s1 = {};
    let s2 = {};
    for(let key of str1){
        s1[key] = (s1[key] || 0) + 1;
    }
console.log(s1);
for (let key of str2){
    s2[key] = (s2[key] || 0) + 1;
}
console.log(s2)
for(let key in s1){
    if(!s2[key]){
        return false
    }
    if(s1[key]!==s2[key]){
        return false
    }
}return true;
}
console.log(checkIfAnagram("anagram", "gramaan"))
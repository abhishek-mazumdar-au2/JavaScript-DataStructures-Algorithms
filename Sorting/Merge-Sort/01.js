import merge from './02'

breaking = arr => {
if(arr.length<=1) return arr
let mid = arr.length/2;
let left = breaking(arr.slice(0, mid))
let right = breaking(arr.slice(mid))
return merge(left, right);
}

console.log(breaking([1,2,3,4,5]));


// Write a function called sumZero which accepts a 'sorted' array and returns th first pair of elements which sums upto form 0.

sumZero = (arr) => {
   var left = 0;
   var right = arr.length -1;
   while(left<right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
         return (`${arr[left]}, ${arr[right]}`)
      } else if(arr[left]+arr[right]>0){
         right--;
      } else if(arr[left]+arr[right]<0){
         left++;
      }
   }
}

console.log(sumZero([-5,-3,3,4,4.5]));
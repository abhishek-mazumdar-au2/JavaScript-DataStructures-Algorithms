// write a funtion which will return the sum upto a given integer.

sumRange = (num) => {
  if(num===1)return 1;
  return num + sumRange(num-1)
}

console.log(sumRange(4));
/*
* @return {number}
*/
var totalHammingDistance = function(nums) {
 let result = 0
 for (let i = 0; i < nums.length; i++) {
   for(let j = i; j < nums.length; j++) {
     result += hammingDistance(nums[i], nums[j])
   }
 } 
 return result
};

var hammingDistance = function(x, y) {
 return parseInt(x ^ y)
   .toString(2)
   .replace(/0/g, '')
   .length
};
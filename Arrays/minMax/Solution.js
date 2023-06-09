let nums = [3,21,5,22,37,623];
class pair{
    constructor(min,max);
    min
    max 
}
function minmax(nums){
    const newPair = new pair();
    nums.sort(function(a, b){return a - b})
    newPair.min= nums[0];
    newPair.max = nums[n-1];
    return newPair;

}
console.log(minmax(nums))
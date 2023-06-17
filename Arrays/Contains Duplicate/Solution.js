let nums = [1,2,3,1];
function containsDuplicate(nums){
    nums.sort(function(a,b){return a-b});
    for(let i =0;i<nums.length-1;i++){
        if(nums[i]==nums[i+1]){
            return true
        }
    }
    return false;
}

console.log(containsDuplicate(nums));
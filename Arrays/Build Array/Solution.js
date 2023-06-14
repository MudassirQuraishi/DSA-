
function buildArray(nums) {
    let n = nums.length;
    let ans =[];
    for(let i=0;i<n;i++){
        ans[i]=nums[nums[i]];
    }
    return ans;
    
}
let nums = [0,2,1,5,3,4];
let Array = buildArray();
console.log(Array);
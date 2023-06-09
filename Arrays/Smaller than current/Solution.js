let nums = [8,1,2,2,3];
function smallerNumbersThanCurrent(nums){
    let n = nums.length;
    let ans =[];
    let count = 0;
    for(let i =0;i<n;i++){
        for(let j =0;j<n;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        ans[i]= count;
        count=0;
    }
    return ans;
}
let  nums = [1,2,3,1,1,3];
function goodPair(nums){
    let n = nums.length;
    let count =0;
    for(let i =0;i<n-1;i++){
        for(let j =i+1;j<n;j++){
            if(nums[j]==nums[i]){
                count++;
            }
        }
    }
    return count;
}
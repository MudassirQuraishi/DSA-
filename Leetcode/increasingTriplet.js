var increasingTriplet = function(nums) {
    const temp = [Infinity, Infinity];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > temp[1] && temp[1] > temp[0]) return true;
        
        if (nums[i] > temp[0]) {
            temp[1] = nums[i];
        } else {
            temp[0] = nums[i];
        }
    }
    
    return false;
};
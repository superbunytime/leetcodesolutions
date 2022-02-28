var missingNumber = function(nums) {
    nums.sort(function(a, b){return a -b})
        for(let i = 0; i < nums.length; i++){
            if(nums[0] != 0){
                return 0
            }
            if(nums[i] + 1 != nums[i + 1]){
                return nums[i] + 1
            }
        }
        return nums.length
};
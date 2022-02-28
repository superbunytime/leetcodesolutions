 var containsDuplicate = function(nums) {
    nums.sort(function(a, b){return a-b})//hate that I had to use sort for this but oh well.    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            return true
        }
    }
    return false
}
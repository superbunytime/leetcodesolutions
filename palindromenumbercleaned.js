var isPalindrome = function(x) {

    xStr = x.toString()
    let myArr = xStr.split("")
    let clone = []
        for(let a of myArr){
            clone.push(a)
        }
    let myStr1 = clone.join("")
    myArr = myArr.reverse()
    let myStr2 = myArr.join("")

    if(myStr2 === myStr1){
        return true
    }
return false
};
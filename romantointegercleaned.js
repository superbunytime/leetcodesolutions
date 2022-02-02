var romanToInt = function(s) {
    function doIt(total, num){
        return total + num
    }
    let romArr = s.split("")
    let numArr = []
        for (let j = 0; j < romArr.length; j++){
            if (romArr[j] == 'C' && romArr[j + 1] == 'M'){
                numArr.push(900)
                j++
            } else if (romArr[j] == 'C' && romArr[j + 1] == 'D'){
                numArr.push(400)
                j++
            } else if (romArr[j] == 'M'){
                numArr.push(1000)
            } else if (romArr[j] == 'D'){
                numArr.push(500)
            }
             else if (romArr[j] == 'X' && romArr[j + 1] == 'C'){
                numArr.push(90)
                j++
            } else if (romArr[j] == 'X' && romArr[j + 1] == 'L'){
                numArr.push(40)
                j++
            } else if (romArr[j] == 'C'){
                numArr.push(100)
            } else if (romArr[j] == 'L'){
                numArr.push(50)
            } else if (romArr[j] == 'I' && romArr[j + 1] == 'X'){
                numArr.push(9)
                j++
            } else if (romArr[j] == 'I' && romArr[j + 1] == 'V'){
                numArr.push(4)
                j++
            } else if (romArr[j] == 'X'){
                numArr.push(10)
            } else if (romArr[j] == 'V'){
                numArr.push(5)
            } else if (romArr[j] == 'I'){
                numArr.push(1)
            }

        }

    return numArr.reduce(doIt)
};
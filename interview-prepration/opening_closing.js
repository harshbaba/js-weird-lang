let inputStrArr = ["{{[()]]}}", "{}}[]{}()", "{}{[[((}))]]", '{}', '{}{}',']]]'];

const checkString = (arrStr) =>{
    let outputArr = [];
    let openingBrackets = ['{','(','['];
    let closingBrackets = ['}',')',']'];

    for(let k = 0; k< arrStr.length; k++){
        let str = arrStr[k];
        let isFalse = false;
        let resultArr = [];

        for(let i = 0; i< str.length; i++){
            let indChar = str[i];
            
            //check: is first bracket closing => then simply set false in flag
            if(resultArr.length == 0){
                if(closingBrackets.includes(indChar)){
                    isFalse = true;
                }else{
                    resultArr.push(indChar);
                }
            }
            else{
                //check isClosing
                if(closingBrackets.includes(indChar)){
                    let lastCharInResultArr = resultArr[resultArr.length - 1];
                    let indexOfLastCharInOpenBrackets = openingBrackets.indexOf(lastCharInResultArr);
                    let indexOfCurrentCharInClosingBrackets = closingBrackets.indexOf(indChar);

                    //check index of both sets, if match then delete last item
                    //oterwise set flag isFalse:true
                    if(indexOfLastCharInOpenBrackets == indexOfCurrentCharInClosingBrackets){
                        resultArr.pop();
                    }else{
                        isFalse = true;
                    }
                }else{
                    resultArr.push(indChar);
                }
            }
            if(isFalse) break;
        }

        if(isFalse || resultArr.length > 0){
            outputArr.push("NO");
        }else{
            outputArr.push("YES");
        }
    }
    return outputArr;
}
console.log(checkString(inputStrArr));


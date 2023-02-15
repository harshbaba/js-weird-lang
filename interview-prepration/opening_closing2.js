let inputStrArr = ["{{[()]]}}", "{}}[]{}()", "{}{[[((}))]]", '{}', '{}{}',']]]'];

const checkString = (arrStr) =>{
    let openingBracketsArr = ['{','(','['];
    let closingBracketsArr = ['}',')',']'];
    let outputArr = [];

    //first loop for extracting each string
    for(let k = 0; k < arrStr.length; k++){
        let str = arrStr[k];
        let stack = [];
        let isFalse = false;

        for(let i = 0; i < str.length; i++){
            let indChar = str[i];

            //check if stack is empty then first bracket must be opening bracket
            if(stack.length == 0){
                if(closingBracketsArr.includes(indChar)){
                    isFalse = true;
                    break;
                }else{
                    stack.push(indChar);
                }
            }else{
                if(closingBracketsArr.includes(indChar)){
                    //if closing bracket is coming then its opening bracket should match with last element in array
                    let indexOfCurrentCharInClosingBrackets = closingBracketsArr.indexOf(indChar);
                    let indexOfLastCharInOpeningBrackets = openingBracketsArr.indexOf(stack[stack.length - 1]);
                    
                    //check both index is matching or not
                    if(indexOfCurrentCharInClosingBrackets == indexOfLastCharInOpeningBrackets){
                        stack.pop();
                    }else{
                        isFalse = true;
                        break;
                    }
                
                }else{
                    stack.push(indChar);
                }
            }
            
        }

        if(isFalse || stack.length > 0){
            outputArr.push("NO");
        }else{
            outputArr.push("YES");
        }
    }

    return outputArr;
}
checkString(inputStrArr);
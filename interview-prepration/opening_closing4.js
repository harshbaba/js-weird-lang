let inputStrArr = ["{{[()]]}}", "{}}[]{}()", "{}{[[((}))]]", '{}', '{}{}',']]]'];

const checkString = (arrStr) =>{
    let openingBrackets = ['{','(','['];
    let closingBrackets = ['}',')',']'];
    let result = [];

    for(let k = 0; k < arrStr.length; k++){
        let indStr = arrStr[k];
        let isFalse = false;
        let stack = [];

        for(let i = 0; i < indStr.length; i++){
            let indChar = indStr[i];

            if(stack.length == 0){
                //indchar should be from opening brackets
                if(openingBrackets.includes(indChar)){
                    stack.push(indChar);
                }else{
                    isFalse = true;
                    break;
                }
            }else{
                if(openingBrackets.includes(indChar)){
                    stack.push(indChar);
                }else{
                    let indexOfLastStackItem = openingBrackets.indexOf(stack[stack.length - 1]);
                    let indexofIndChar = closingBrackets.indexOf(indChar);

                    if(indexOfLastStackItem == indexofIndChar){
                        stack.pop();
                    }else{
                        isFalse = true;
                        break;
                    }
                }
            }
        }

        if(isFalse || stack.length > 0){
            result.push('NO');
        }else{
            result.push('YES');
        }
    }

    return result;
}

checkString(inputStrArr);
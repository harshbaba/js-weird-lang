let inputStrArr = ["{{[()]]}}", "{}}[]{}()", "{}{[[((}))]]", '{}', '{}{}',']]]'];

const checkString = (arrStr) =>{
    let openingBrackets = ['{','[','('];
    let closingBrackets = ['}',']',')'];
    let outputArr = [];

    for(var k = 0; k < arrStr.length; k++){
        let indStr = arrStr[k];
        let isFalse = false;
        let stack = [];

        for(var i = 0; i< indStr.length; i++){
            let indChar = indStr[i];

            //if stack be empty then first bracket should be open bracket
            if(stack.length == 0){
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
                    //it means indChar is closing bracket, it should match with last item in stack
                    let indexOfIndCharInClosingBrackets = closingBrackets.indexOf(indChar);
                    let indxOfStackLastItemInOpeningBrackets = openingBrackets.indexOf(stack[stack.length-1]);

                    //it should be match
                    if(indexOfIndCharInClosingBrackets == indxOfStackLastItemInOpeningBrackets){
                        stack.pop();
                    }else{
                        isFalse = true;
                        break;
                    }
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
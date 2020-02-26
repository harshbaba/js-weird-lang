
var origString = "AMALAYALAMB";
var palindromeObj = {"length": 0,"string": ""};

function isPalinDrome(str){
    var revStr = str.split('').reverse().join('');
    if(str == revStr){
        isLongestPalinDrome(str);
    }
}

function isLongestPalinDrome(str){
    if(palindromeObj.length < str.length){
        palindromeObj.length = str.length;
        palindromeObj.string = str;
    }
}

var string = origString;

while(0 < string.length){
    
    var strInd = "";
    for(var i = 0; i< string.length; i++){
        strInd += string[i];
        isPalinDrome(strInd);
    }

    string = string.slice(1);
}

console.log(palindromeObj);




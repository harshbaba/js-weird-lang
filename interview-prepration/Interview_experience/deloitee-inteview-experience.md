const x = [1,2,3]
x= [1,2,3,4];
console.log(x);

==========================
sum(2)(3)(5)  => 10
function add(a){
return function(b){
return function(c){
return a+b+c;
}
}
}
=========================
"use strict";
y = 3;
console.log(y);
var y = 5;
===================

console.log(1+2+'3'+ 4 + 6 +'7' + 9+2)

================================

[1,2,2,3,2,2,3,4,2,3] 

//output max no 2 

function findMaxOccurance(arr){
let obj = {};
for(let i = 0; i< arr.length; i++){
let indNo = arr[i];
if(obj.hasOwnProperty(indNo)){
obj[indNo] = obj[indNo] + 1;
}else{
obj[indNo] = 1;
}
}
var maxNo = 0;
for(item of obj){
if(obj[item] > maxNo){
maxNo = obj[item];
}
}

console.log("result:"+ maxNo);
}

===========================

[1,[1,2,[1,[2]]],[1,2,3,4]]  
Hint: Recursive function
Output SHould Be:
[1,2,3,4]

===============Inheritance=======
Note: Dont use extends method

Class A or function A           Class B or function B

fname : John,     age - 25
lname : Due,      place - USA

Will take reference of Class B and Print 'John Due is 25 years old and lives in USA'


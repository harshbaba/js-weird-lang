function NormalCalc(){
    this.addition = function(a,b){
        return a+b;
    }
    this.subtraction = function(a,b){
        return a-b;
    }
}


function ModernCalc(){
    this.square = function(a){
        return a*a;
    }
}

ModernCalc.prototype = new NormalCalc();
//now modern calc will access all methods of normalCalc constructor function
var modern_calc = new ModernCalc();
var normal_calc = new NormalCalc();
console.log(modern_calc);
console.log(normal_calc);
var result = modern_calc.addition(4,5);
console.log(result);

//if we are working on object 
// var normalCalc = {
//     "add":function(){}
// }

// var ModernCalc ={
//     "__proto__":normalCalc
// }
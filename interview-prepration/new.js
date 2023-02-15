//=======Question 1=========

    function func(x){

        var z = 8;
        return function(y){
            console.log('x'+x+'y'+y+'z:'+z);
            alert(x+y+z);
        }

    }

    var n1 = new Number(32);
    var a1 = func(n1);
    var n2 = new Number(16);
    var a2 = func(n2);
    var n3 = new Number(8);
    var a3 = func(n3);
    var n4 = new Number(4);
    var a4 = func(n4);
    var n5 = new Number(2);
    var a5 = func(n5);

    a1(2);
    a2(4);
    a3(8);
    a4(16);
    a5(32);

    //output 42 28 24 28 42

//=======Question 2=========
 
    Which of the following is not a screen property in javascript

    Selected
//========Question 3======
    function foo(){
        return 5;
    }
    
    Ans:
    Assign a reference to the foo function to the variable myvar

//========Question 4======

    let age = 23;
    let arr = ['John', age, age+=10, age--, age-1, undefined];
    console.log(arr);
    arr.length = 2;
    console.log(arr);
    delete arr[3];
    console.log(arr.length);
    delete arr[0];
    console.log(arr);
    console.log(arr.length);


    Ans:
    ['John', 23, 33, 33, 31, undefined]
    ['John', 23]
    2
    [empty, 23]
    2

    Age is a local variable
    The final value of Age is 31
    

////=======Question 5========
    What is the purpose of noscript tag
    Ans:Enclose text to be displayed by non javascript browsers.

///========Question 6=======
    (function(){
        console.log('1');
        setTimeout(()=>{console.log(2)},1000);
        setTimeout(()=>{console.log(3)},0000);
        console.log(4);
    })()

    Ans:
    1432

///========Question 7==========













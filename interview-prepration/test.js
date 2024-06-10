Find No. of occurrence in array.
var arr = [1,2,3,1,3,3];
output:
op = {
    1: "2",
    2:"1",
    3:"3"
}
===========
var arr = [1,2,3,5,8,4]
secondHighest = 5;

<div class="parent">
    <div class="child">
        <button class="button">Click Me</button>
    </div>
</div>

document.getElementsByClassName('button')
        .addEventListener('click', function (event) {
            console.log('button clicked');
        });

document.getElementsByClassName('child')[0]
        .addEventListener('click', function (event) {
            console.log('child clicked');
        });

document.getElementsByClassName('child')[1]
        .addEventListener('click', function (event) {
            console.log('child 1 clicked');
        });

document.getElementsByClassName('parent')[0]
        .addEventListener('click', function (event) {
            console.log('parent clicked');
        });

<div class="parent">
    <div class="child">
        <button class="button">Click Me</button>
    </div>
</div>

$(".button").click(function(){
    console.log('button clicked');
})

$(".child").click(function(){
    console.log('child clicked');
})

$(".parent").click(function(){
    console.log('parent clicked');
})

$(".child").click(function(){
    console.log('child clicked copy');
})




=========================

<ul class="menu">
<li><a href="home.html">Home</a></li>
<li><a href="about.html">About</a></li>
<li><a href="contact.html">Contact</a></li>
</ul>


========================

<ul class="menu">
<li>
    <a href="#">Level1></a>
    <ul>
        <li><a href="#">Level2</a></li>
        <li><a href="#">Level2</a></li>
        <li><a href="#">Level2</a></li>
    </ul>
</li>
<li><a href="#">Level1></a</li>
<li><a href="#">Level1></a</li>
</ul>

Expectation: Level1 links color should be black, level 2 link color should be blue.

=============
Write css for next checkbox of my class only.
<form class="myform">
    <input type="text" value=""/>
    <input type="text" value=""/>
    <input class="myclass" type="text" value=""/>
    <input type="text" value=""/>
    <input type="text" value=""/>
    <input class="myclass" type="text" value=""/>
    <input type="text" value=""/>
    <input type="text" value=""/>
</form>


console.log(1);
setTimeout(function(){ console.log(2); },00);
setTimeout(function(){ console.log(3); },2000);
console.log(4);

Output: //

var user ={
    name: "john",
    age: "22"
}

var user2 = {
    name: "john",
    age: "22"
}

console.log(user == user2);
console.log(user === user2);

var user3 = {
    name: "Harsh",
    age:"22"
}

console.log(user == user2);
console.log(user === user2);
console.log(user2 == user3);

var user ={
    name: "john",
    age: "22"
}
var anotherUser = user;
anotherUser.name = 'Brett';

console.log(user.name);
console.log(anotherUser.name);



var x = 2;
var y = [];
var z = {}
var a = null;
var b = undefined;

console.log(typeOf(x));
console.log(typeOf(y));
console.log(typeOf(z));
console.log(typeOf(a));
console.log(typeOf(b));



function test(){
    return new Date();
}

function add(a, b){
    return a + b;
}

add(5,3);




add(5)(3);
Output: 8

var user = {
    name:'John',
    age: '30',
    getName: function(){
        return 'name is'+this.name+' and age: '+ this.age
    }
}

var employee = {
    sapId: '1234'
}

Object.setPrototypeOf(employee, user)
console.log(employee.getName())

=================
var user = {
    name:'John',
    age: '30',
    address: {
        line1: 'john address',
        line2: 'john address2'
    }
}

var anotherUser = {...user}


anotherUser.name = "Harsh";
anotherUser.address.line1 = "Harsh Line 1";

console.log(user.name);
console.log(anotherUser.name);
console.log(user.address.line1);
console.log(anotherUser.address.line1);


var arr = ["UP","MP","HP"];
arr.push("AP");
delete arr[1];
console.log(arr.length);
console.log(arr);

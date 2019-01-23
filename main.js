//Default Parameters in ES6//

Date.prototype.getDayName = function(format = "fullName", dateInput = new Date()){
    let date = dateInput;
    //return date.constructor.name;
    if(date.constructor.name == "String"){
        date = new Date(dateInput);
    }
    
    let dayNameArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayNo = date.getDay();
    
    if(format == "fullName"){
        return dayNameArray[dayNo];
    }
    else{
        return dayNameArray[dayNo].substring(0,format.length);
    }
}

let date = new Date();
console.log(date.getDayName());
console.log(date.getDayName("DDD"));
console.log(date.getDayName("DD"));
console.log(date.getDayName("fullName","1990-07-23"));

//Template Literals & Multi-line Strings in ES6

let postObj = {
    "postId":2,
    "title":"I am post title",
    "shortDesc":"I am short description",
    "fullDesc":"Lorem Ipsum Dolor Sit amet,Lorem Ipsum Dolor Sit ametLorem Ipsum Dolor Sit amet"
}

let postHtml = `<div class="post-ind-box${postObj.postId}">
                    <h3>${postObj.title}</h3>                
                    <h4>${postObj.shortDesc}</h4>
                    <p>${postObj.fullDesc}</p>
                </div>`;
//postHtml;
console.log(postHtml);
$('#post-placeholder').append(postHtml);

//Destructuring Assignment in ES6
//Enhanced Object Literals in ES6

//Arrow Functions in ES6


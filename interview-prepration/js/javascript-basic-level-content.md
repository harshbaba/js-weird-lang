### Javascript Basic level content
1. Event Delegation

Event delegation is an event handling technique where, instead of attaching event handlers directly to every element you want to listen to events on, you attach a single event handler to a parent element of those elements to listen for events occurring on its descendant elements.
When handling the event, you check which element fired the event, and respond accordingly.
Event delegation relies on event bubbling in the DOM. This is the process whereby an event triggered on a child element propagates up the DOM tree to its parent element, and its parents parent element, etc., until the document is reached.
Bubbling can also be stopped by the programmer using event.stopPropagation(). 
Note that not all DOM events propagate focus, blur, load, and unload don't. 


[Reference Link](https://www.sitepoint.com/event-delegation-with-jquery/)

2. Event Bubbling & Capturing

[Reference Link](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)

3. stoppropagation-vs-stopimmediatepropagation

[Reference Link](https://codeplanet.io/preventdefault-vs-stoppropagation-vs-stopimmediatepropagation/)

4. event.preventDefault

[Reference Link](https://codeplanet.io/preventdefault-vs-stoppropagation-vs-stopimmediatepropagation/)

5. JS String Methods

[Reference Link](https://www.w3schools.com/js/js_string_methods.asp)

6. JS Number Methods

[Reference Link](https://www.w3schools.com/js/js_numbers.asp)

7. JS Array Methods

[Reference Link](https://www.w3schools.com/js/js_array_methods.asp)

8. JavaScript Regular Expressions

[Reference Link](https://www.w3schools.com/js/js_regexp.asp)

9. Js Scope

[Reference Link](https://www.w3schools.com/js/js_scope.asp)

10. Hoisting in Java Script
Hoisting Variables 
Hoisting functions

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

[Reference Link Scotch.io](https://scotch.io/tutorials/understanding-hoisting-in-javascript)

[Reference Link W3Schools](https://www.w3schools.com/js/js_hoisting.asp)

[Reference Link Medium](https://medium.com/javascript-in-plain-english/)

[Reference Link Medium](https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)


11. JS Strict Mode

[Reference Link W3](https://www.w3schools.com/js/js_strict.asp)

12. Closure

    A closure is a function having access to the parent scope, even after the parent function has closed.

[Reference Link](https://www.w3schools.com/js/js_function_closures.asp)

13. CallBack

    A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
    In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. 
    Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

[Reference Link](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

14. Service Workers for Offline App

15. Call,Apply & Bind
    With the call() method, you can write a method that can be used on different objects.
    With the apply() method, you can write a method that can be used on different objects.

    The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
    
    [Reference Link](https://www.w3schools.com/js/js_function_apply.asp)

    ```JavaScript
        const person = {
        fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
        }

        const person1 = {
        firstName:"John",
        lastName: "Doe"
        }

        person.fullName.call(person1, "Oslo", "Norway");
        person.fullName.apply(person1, ["Oslo", "Norway"])
    ```

16. IIFE & its advantage
    IIFE (Immediately Invokable Function Expression) is a important concept in JavaScript. ... 
    The common advantage of IIFE is that any "Function or Variable" defined inside IIFE, 
    cannot be accessed outside the IIFE block, thus preventing global scope from getting polluted.
    
    [Reference Link](https://www.codeproject.com/Articles/1110916/JavaScript-IIFE-Design-Pattern)

18. DEFER AND ASYNC TAGS

    [Reference Link](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

    [Reference Link](https://www.upwork.com/hiring/development/11-tips-to-optimize-javascript-and-improve-website-loading-speeds/)

19. What is namespacing in javascript and what it does

    [Reference Link](https://www.codeproject.com/Articles/829254/JavaScript-Namespace)

    [Reference Link](https://stackoverflow.com/questions/8523231/what-is-meant-by-javascript-namespacing)

20. Object Based vs Object Oriented

21. Data types in JavaScript
    
    [Reference Link](https://medium.com/@junshengpierre/javascript-primitive-values-object-references-361cfc1cbfb0)
    
    [Reference Link](https://www.w3schools.com/js/js_datatypes.asp)

22. difference-between-typescript-and-javascript
    
    [Reference Link](https://www.geeksforgeeks.org/difference-between-typescript-and-javascript/)

23. Web workers vs Service workers vs Worklets
    Service workers are a proxy between the browser and the network. By intercepting requests made 
    by the document, service workers can redirect requests to a cache, enabling offline access. 
    Web workers are general-purpose scripts that enable us to offload processor-intensive work from the main thread.
    
    [Reference Link](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)


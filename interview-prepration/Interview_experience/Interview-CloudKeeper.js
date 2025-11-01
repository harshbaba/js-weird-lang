1.What is difference b/w content hashing & normal hashing.
2.Tell some features of webpack.
2.Webpack & Vite (https://vite.dev/)
3.How you will show multiple mfe on one page.
4.Difference b/w webworker & ServiceWorker
5.What is Web Vitals.
https://chatgpt.com/share/68d59c8c-1d1c-8009-83d7-0c0df5e6b797
6.As a team lead How you will convince to your manager that accessibility is also a must have item.
7.Difference b/w plugins and loaders.
8.How data will be sharing in microfrontend.
9.What is micro & macro task in callStack
10.Break bundle in chunks in webpack.
https://chatgpt.com/share/68d44fa6-9b9c-8009-9467-4095a568fc9d
11.Tree Shaking & Dead Code Elimination
https://chatgpt.com/share/68d44d3a-4bc0-8009-a20b-b38fe652ee79
12.How we can do gzip compression in webpack.
https://chatgpt.com/share/68d44ea5-c25c-8009-979e-501eb54632e6

======
https://codeshare.io/5XNl3z

console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1"); 
  Promise.resolve().then(() => {
    console.log("promise 1"); 
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2"); 
  setTimeout(function () {
    console.log("setTimeout 2"); 
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1"); 
  setTimeout(() => {
    console.log(res);
  }, 0);
});


console.log("begins");
console.log("promise 2");
console.log("setTimeout 1");
console.log("promise 1"); 
console.log("setTimeout 2");
console.log("dot then 1"); 
console.log(res);

===================

https://codeshare.io/aV3mDQ


You are given a lowercase English string s and an array of integers rotations. Each element in rotations
represents a number of characters (from the beginning of the string) that need to be rotated forward by one position in the alphabet.

Rotation Rule:
Rotating a character means moving it one step forward in the alphabet.

For example: 'a' → 'b', 'z' → 'a'

A prefix of the string (of length rotations[i]) should have all its characters rotated once.

This rotation process should be applied sequentially for each element in rotations.

Input:
s: a non-empty string of lowercase English letters, with length ≤ 1000.

rotations: a list of integers, each ≤ length of s.


Input:
s = "abc"
rotations = [1, 2, 3]

Step-by-step:
1. Rotate first 1: "abc" → "bbc"
2. Rotate first 2: "bbc" → "ccc"
3. Rotate first 3: "ccc" → "ddd"

Output: "ddd"

function doRotations (str, rotations){
  debugger
  let outputStr = str.split("");
  for(let i=0; i< rotations.length; i++){
    let rotate = rotations[i];
    let index = 0;
    while(index < rotate){
      let item = outputStr[index].charCodeAt();
      item++
      let charac = String.fromCharCode(item)
      outputStr[index] = charac;
      index++
    }
  }

  return outputStr.join("");
}

x = doRotations ('abc', [1,2,3])

====================
https://stackblitz.com/edit/react-t56sf6p3?file=src%2FApp.js

import React, { useState } from 'react';

const Child = React.memo(({ item }) => {
  console.log(`Rendering child: ${item}`);
  return <li>{item}</li>;
});

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <ul>
        {items.map((item, index) => (
          <Child key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Parent;
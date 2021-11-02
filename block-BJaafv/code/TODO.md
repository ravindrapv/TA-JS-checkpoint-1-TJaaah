1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b) {
  return a + b;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```
first function is returns value directly 
second one is after results its always  shows undefined 

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.
both a and b values are stored

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?
the output is 36 because it add the numbers a+b

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

   yes we can store because we are storing expression on right hand side of = so its allowed

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

```js
function sayHello(name) {
  return `hello arya`
}
sayHello();
```
6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();
```
output is // 'Hello, John'
user name and massage is stored in a variable and returns the value 

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // its alerts user name John

showMessage(); // hello john

alert(userName); // john 
```

8. What is a Anonymous Function give example of three functions.

 a function that was declared without any named identifier to refer to it.it is called anonymous 
 ```js
 let name = function() {
  alert('I am venkataravindra');
}
name();
```

9. Can function declaration be a Anonymous Function? Explain
The main difference between a function expression and a function declaration is the function name,


10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```
function calculateBMI()
function appropiateDrinks()
function isInRange()
function minToSec()
function getTabale()

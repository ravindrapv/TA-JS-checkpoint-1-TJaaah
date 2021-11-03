1. Using loops take 10 inputs from user and find the average of all the numbers.

```js
function input() {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result = result + +prompt("Enter a number");
    console.log(result);
  }
  result = result / 10;
  return result;
}
input();
```

2. What will be the output of the code below

```js
let i = 0;
while (i < 3) {
  println("hi");
  i++;
}
```

output is a error 3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

```js
function getEvenSum(max = 10) {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
getEvensum();
```

4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.

```js
function getOddSum(max = 10) {
  let sum = 0;
  for (let i = 0; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
getOddSum();
```

5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.

```js
function getProductOfDigits(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = +num;
  }
  return sum;
}
getProductOfDigits(1, 2, 3);
```

- If the input value is less than 0 return `not a valid input`
- For example if the input is `123` output should be `6`.

6. What will be the output of the following code below in multiple conditions? Explain with reason?

```js
function check(num) {
  if (num > 5) {
    return "Bigger than 5";
  }

  if (num < 5) {
    return "Smaller than 5";
  }

  return num;
}

check(10); // output is Bigger than 5  because its a if condition is > 5
check(1); // output is Smaller than 5 because its a if condition is < 5
check(5); // output is 5 because its 5
```

7. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === "Arya") return "You are arya";
  if (name === "John") return "You are john";
  return "Who are you";
}

getOutput("Arya"); //the output is 'You are arya' because its === oprater returns you are arya
getOutput("John"); //  the output is 'You are john'because its === oprater returns you are john
getOutput(); //  the output is Who are you because it returns who are you
```

8. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === "Arya") console.log("You are arya");
  if (name === "John") console.log("You are john");
  return "Who are you";
}

getOutput("Arya"); // the output is you are arya and it returns who are you because its in consol.log
getOutput("John"); // the output is you are john and it returns who are you because its in consol.log
getOutput(); // returns who are you
```

9. Can a function have multiple return statement? Give one example if possible and explain the reason.
   we can execute only one return statement at a time

```js
boolean isEven(int num)

{

if(num%2==0) {

return true;

} else

return false;

}

```

The above code has two return statements but while execution only one return statement gets executed for each run.

10. What is the difference between `for` loop and `while` loop. What are the different place you can use them? Explain with example.

The difference between for loop and while loop is that in for loop the number of iterations to be done is already known and is used to obtain a certain result whereas in while loop the command runs until a certain condition is reached and the statement is proved to be false.

```js
for(initial condition; number of iterations)
{//body of the loop }


While(condition)
{statements;//body}
```

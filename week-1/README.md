# JavaScript Simple Codes

A collection of beginner-friendly JavaScript programs and examples.

## Data Types

JavaScript supports different types of data.

### Example

```javascript
let name = "John";        // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let marks = null;         // Null
let city;                 // Undefined
let person = {id: 1};     // Object
let colors = ["red"];     // Array
```

---

## Operators

### Arithmetic Operators

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
```

### Comparison Operators

```javascript
console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");
```

### Logical Operators

```javascript
console.log(true && false);
console.log(true || false);
console.log(!true);
```

---

## Conditional Statements

### if Statement

```javascript
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}
```

### if...else

```javascript
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### switch Statement

```javascript
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid");
}
```

---

## Loops

### for Loop

```javascript
for(let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### while Loop

```javascript
let i = 1;

while(i <= 5) {
  console.log(i);
  i++;
}
```

### do...while Loop

```javascript
let j = 1;

do {
  console.log(j);
  j++;
} while(j <= 5);
```

---

## Functions

### Simple Function

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

### Function with Parameters

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
```

### Arrow Function

```javascript
const square = (num) => num * num;

console.log(square(4));
```

---

## Arrays

### Create Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### Array Methods

```javascript
fruits.push("Orange");
fruits.pop();

console.log(fruits);
```

### Loop Through Array

```javascript
fruits.forEach(function(item) {
  console.log(item);
});
```

---

## Objects

### Object Example

```javascript
let student = {
  name: "Rahul",
  age: 20,
  course: "JavaScript"
};

console.log(student.name);
```

### Add Property

```javascript
student.city = "Hyderabad";

console.log(student);
```

---

## String Methods

```javascript
let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));
console.log(text.slice(0, 4));
```

---

## Number Programs

### Prime Number Check

```javascript
let num = 7;
let isPrime = true;

for(let i = 2; i < num; i++) {
  if(num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime" : "Not Prime");
```

### Factorial Program

```javascript
let n = 5;
let fact = 1;

for(let i = 1; i <= n; i++) {
  fact *= i;
}

console.log(fact);
```

### Fibonacci Series

```javascript
let a = 0, b = 1;

for(let i = 1; i <= 5; i++) {
  console.log(a);

  let temp = a + b;
  a = b;
  b = temp;
}
```

---

## DOM Basics

### Change Text

```html
<h1 id="title">Hello</h1>

<script>
document.getElementById("title").innerText = "Welcome";
</script>
```

### Button Click Event

```html
<button onclick="showMessage()">Click Me</button>

<script>
function showMessage() {
  alert("Button Clicked");
}
</script>
```

---

## Simple Projects

### Counter App

```javascript
let count = 0;

function increase() {
  count++;
  console.log(count);
}
```

### Calculator

```javascript
function calculate(a, b, operator) {
  switch(operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    default:
      return "Invalid Operator";
  }
}
```

### Random Number Generator

```javascript
let random = Math.floor(Math.random() * 100);

console.log(random);
```

---

## Conclusion

These examples cover basic JavaScript concepts for beginners.

Practice each topic regularly to improve your JavaScript skills.

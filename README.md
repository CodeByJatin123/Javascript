# Javascript
Learning Javascript from Chai aur code
This repository contains basic concepts of JavaScript
like comparison operators, data types, primitive and
reference types. Notes are written in simple Hinglish.
## Topics Covered
- Comparison Operators (== vs ===)
- Primitive Data Types
- Reference Data Types
- heap and stach memory

## Comparison in JavaScript
JavaScript provides loose and strict comparison...
### JavaScript String Practice

- Used template literals for string interpolation
- Worked with string objects and properties
- Practiced string methods like charAt, indexOf, slice, substring, trim
- Modified URLs using replace and includes
- Converted strings into arrays using split
Learned how to create object literals in JavaScript using key–value pairs.

Understood how to access object properties using dot notation and bracket notation.

Learned that keys with spaces (like "full name") must be accessed using bracket notation.

Understood how to use Symbol as a unique and hidden key inside an object.

Learned that even when an object is declared with const, its properties can be updated.

Learned how to store and use an array inside an object.

Understood how to add a function inside an object, which is called a method.

Learned the difference between a function reference and function execution using parentheses ().


**## JavaScript Numbers & Math

- Learned about number primitives and Number objects
- Used number methods like toString, toFixed, toPrecision, and toLocaleString
- Practiced Math object methods (abs, round, ceil, floor, min, max)
- Generated random numbers using Math.random()
- Created random numbers within a fixed range using min–max formula

**
I learned how to work with the JavaScript Date object. I understood how to create a new date using new Date() and display it in different readable formats like toString(), toDateString(), and toLocaleString(). I also learned how to create custom dates using different formats and understood that months in JavaScript start from zero. Along with this, I explored timestamps using Date.now(), converted milliseconds into seconds, and extracted useful information like month number and day of the week. Finally, I learned how to format dates using toLocaleString() to get the full name of the weekday.

Today I Learned – JavaScript Arrays

An array is created using square brackets [] in JavaScript.

Array elements are accessed using index numbers.

The push() method adds an element at the end of the array.

The pop() method removes the last element of the array.

The unshift() method adds an element at the beginning of the array.

The shift() method removes the first element of the array.

The unshift() method is not recommended because it changes the index of all elements.

The includes() method checks whether an element is present in the array or not.

The join() method converts an array into a string.

The slice() method returns a part of the array without changing the original array.

The splice() method changes the original array and returns the removed elements.
From chai aur code


Today, I learned different ways to check, convert, and create arrays in JavaScript.

Array.isArray()
This method is used to check whether a value is an array or not.
It returns true if the value is an array, otherwise false.

Array.from()
This method is used to convert iterable or array-like objects (such as strings) into an array.
For example, converting a string creates an array of its characters.
However, normal objects are not iterable, so Array.from() does not work on them directly, and array methods cannot be used on objects.

Array.of()
This method is used to create a new array from the given values.
It is a simple and clear way to create an array from multiple variables.

I Learned Today (JavaScript Objects)

A single object can be created using object literal syntax {}.

Properties can be added to an object after creation using dot notation.

Objects can store different types of values like strings, booleans, and numbers.

An object can also contain another object inside it (nested objects).

Nested object values can be accessed using dot notation step by step.

JavaScript allows accessing deeply nested properties like
regularuser.fullname.firstname.

Objects can have numeric keys, which are automatically treated as strings.

Two or more objects can be merged into one object.

The spread operator (...) is the recommended and modern way to merge objects.

Using spread operator creates a new object without modifying the original ones.

Merging objects helps in combining data cleanly and efficiently.



I Learned Today 

I learned Object Destructuring in JavaScript.

Object destructuring is used to extract values from an object.

It allows accessing object properties without using dot notation.

I learned how to rename a property while destructuring.

Destructuring makes the code short, clean, and readable.

It is an ES6 feature of JavaScript.

Object destructuring is widely used in modern JavaScript and React.****


First, I learned how to use console.log() to print output on the console. It is mainly used for debugging and checking values.

Then, I learned how to declare a function and call a function. A function only runs when it is called.

I also learned how to use parameters in a function and how to pass arguments while calling it.

I understood the importance of the return statement. Once a return statement is executed, the function stops running, and any code written after return does not execute.

I learned how to store the returned value of a function in a variable and use it later.

Finally, I learned about template literals using backticks (`), which allow us to insert variables directly into strings using ${}.
from chai aur code.


Learned about Rest Operator (...) in functions

Used rest operator to accept multiple arguments

Understood that rest operator stores values in an array

Learned that rest operator must be the last parameter in a function


Learned how to pass objects as arguments to a function

I Learned Today (JavaScript)

Block Scope

let and const are block scoped.

They can be accessed only inside { }.

var is not block scoped.

Global and Local Scope

Variables declared outside a block are global.

Variables declared inside a block are local.

A local variable does not affect a global variable with the same name.

Variable Shadowing

When a local variable has the same name as a global variable, it hides the global one inside the block.

Nested Functions

A function inside another function is called a nested function.

The inner function can access variables of the outer function.

Lexical Scope

Inner functions can use variables declared in their parent function.

Parent functions cannot access variables of child functions.

Block Scope in Conditional Statements

Variables declared inside if blocks are accessible only within that block.

Function Hoisting

Function declarations are hoisted.

They can be called before their definition.

Function Expressions

Functions stored in variables are not hoisted.

Calling them before initialization causes an error.

Best Practice

Prefer let and const over var.

Write functions clearly to avoid scope-related errors.

Accessed object properties using dot notation

Used template literals to display dynamic values in strings

Understood real-world use of functions with objects (cart, user data)

Objects can store data and methods.

this keyword refers to the current object inside an object method.

Object properties can be accessed using this.propertyName.

this behaves differently in global scope and functions.

In a normal function, this does not access local variables.

Arrow functions do not have their own this.

Arrow functions use lexical this from the outer scope.

Arrow functions provide shorter function syntax.

Arrow functions can return values without using return.

Parentheses are required when returning an object from an arrow function




IIFE ka full form → Immediately Invoked Function Expression

Function ko define karke turant execute karte hain

IIFE me function ko brackets ( ) me wrap karte hain

End me (); laga ke call karte hain

Arrow function bhi IIFE me use ho sakta hai

IIFE me parameters pass kar sakte hain

${variable} use karne ke liye backticks ` ` zaroori hote hain

IIFE global scope pollution se bachata hai

Multiple IIFE likhte waqt semicolon ; important hota hai

chai aur code-->>>>


today i learned>>
1️⃣ JavaScript code 2 phases me run hota hai

Memory Phase

Execution Phase

2️⃣ Memory Phase me

Variables → undefined

Functions → pura function store hota hai

3️⃣ Execution Phase me

Variables ko real value milti hai

Functions execute hote hain

4️⃣ Har function call pe

Naya Execution Context banta hai

Naya Memory + Execution phase hota hai

5️⃣ Function ke Memory Phase me

Sirf parameters (num1, num2)

Aur local variables (total)
hote hain



I Learned Today (Points Only)

How if and else statements work.

How to use comparison operators.

How the AND (&&) operator works.

How the OR (||) operator works.

That JavaScript uses lowercase true and false.

The difference between assignment (=) and comparison (==, ===).

Variables must be declared before using them.

The difference between var, let, and const scope.

How multiple conditions are checked in control flow.

Basic understanding of boolean logic in JavaScript.


6️⃣ Global variables function ke memory phase me nahi aate

7️⃣ Arguments sirf value pass karte hain, pura variable nahi

8️⃣ Function ka kaam khatam → Call Stack se remove


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



switch and casses



1️⃣ Falsy Values (Total 7 main ones)

These values behave like false in a condition:

false

0

-0

0n (BigInt zero)

"" (empty string)

null

undefined

NaN

👉 Agar condition me ye aaye to block execute nahi hota.

2️⃣ Truthy Values

Inke alawa almost sab values truthy hoti hain.

Examples:

"0" (string zero)

"false" (string)

" " (space)

[] (empty array)

{} (empty object)

function(){}

👉 Ye sab condition me true behave karte hain.

3️⃣ Important Concept

Empty array [] → truthy

Empty object {} → truthy

Empty string "" → falsy


I Learned Today

I learned how to use a basic for loop in JavaScript.

I understood how a loop runs from a starting value to an ending condition.

I learned how to use nested loops (a loop inside another loop).

I printed multiplication tables using nested loops.

I learned the modern way of printing using template literals (backticks and ${}).

I learned how to create an array.

I understood how to use the length property of an array.

I learned how to access array elements using index numbers.

I printed all elements of an array using a loop.


"use strict";

// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Exercises Day 1");

// Open up index.html in the browser. If you see "Successfully Linked Exercises Day 1" on your page, you may continue.

//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."
var a =
  "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.";
console.log(a);
//Log out the quote

//Log out the type of the variable. Is it a string? A number? Something else?
console.log(typeof a);
//2. Define a variable `quoteLength` that stores the length of the quote.
console.log(a.length);
//Log out the length
var b = "web developing program is a fast track program.";
console.log(b);
console.log(b.length);
//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
//Log out the new quote
var c = " - Rear Admireal Grace Hopper";
console.log(a + c);
//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.
function sumOfLowNumbers(num1, num2, num3, num4, num5) {
  var d = 0;
  console.log(num1 + num4);
  console.log(num1 + num2 + num3 + num4 + num5);
  if (num1 <= 6) {
    d = num1 + d;
  }

  if (num2 <= 6) {
    d = num2 + d;
  }
  if (num3 <= 6) {
    d = num3 + d;
  }
  if (num4 <= 6) {
    d = num4 + d;
  }
  if (num5 <= 6) {
    d = num5 + d;
  }
  console.log(d);
}

sumOfLowNumbers(2, 1, 4, 2, 2);
//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.

//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.

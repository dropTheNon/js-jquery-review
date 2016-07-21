// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13

// =============================
// ======== Pseudo-Code ========
// =============================

// So n will equal the stopping point for the function,
// so we don't cause an endless loop and crash the browser.

// If we take [1, 2], where a = 1, b = 2 (initially only, these will all change), c = a + b,
// and d as a placeholder.

// =============================
// ======== Actual Code ========
// =============================

function fib(n) {
  var a = 1,
      b = 2,
      d = 0;

  var c = function(a, b) {
    return a + b;
  };

  if (n < 3) {
    return a;
  } else if (n === 3) {
    return b;
  } else if (n > 3) {
    for (var i = 4; i < n + 1; i++) {
      d = c(a, b);
      a = b;
      b = d;
    }
    return d;
  }
}
console.log("*******************");
console.log(fib(7));
console.log("*******************");
console.log(fib(21));
console.log("*******************");
console.log(fib(100));
console.log("*******************");

// ===============================
// ======== Author's note ========
// ===============================

// Hi! Chances are excellent you're me, but if you're not - I'm Josh;
// thanks for looking at my code! As I currently type this, I'm a
// student at General Assembly Seattle's Web Development Immersive.
// I'm writing this note because I'm proud of myself for writing this
// function without looking up anything, and only getting the tiniest
// nudge in the right direction from my instructor (Brian Hague) at
// the end of it all. I had some self doubts about my technical ability
// before taking this course, and while I still (and will continue to)
// struggle a bit with "imposter syndrome", I actually AM getting it.
// I actually AM learning how to code, and how to think like a programmer.
// And that's pretty fucking cool, man. Keep working hard and pushing.
// You got this!  :-)

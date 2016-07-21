// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

var str = 'racecar';

// Example Output

// false   <---   This is incorrect - Output should be true.

function isPalindrome(string) {
  var gnirts = string.toLowerCase().split("").reverse().join("");
  if (gnirts === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(str));

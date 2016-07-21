// pair(obj)
// Construct array pairs from objects.

// Example Input

var obj = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]

function pair(obj) {
  var finalArr = [];
  for (var key in obj) {
    var arr = new Array();
    arr[0] = key;
    arr[1] = obj[key];
    finalArr.push(arr);
  }
  return finalArr;
}

console.log(pair(obj));

// zip(array, array2)
// Merge two arrays with the values at their corresponding positions

// Example Input

var artists = ['Passion Pit', 'Mumford and Sons', 'MGMT'];
var albums = ['Gossamer', 'Sigh no more', 'Time to Pretend'];

// Example Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]

function zip(array, array2) {
  var finalArr = [];

  if (array.length !== array2.length) {
    return "Error";
  } else {
    for (var i = 0; i < array.length; i++) {
    var tempArr = [];
    tempArr.push(array[i], array2[i]);
    finalArr.push(tempArr);
    }
    return finalArr;
  }
}

console.log(zip(artists, albums));

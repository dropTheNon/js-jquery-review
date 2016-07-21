// pluck(arr, key)
// Given an array of objects, pluck the object values associated with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer', artist: 'Passion Pit' },
  { name: 'Sigh no more', artist: 'Mumford and Sons' },
  { name: 'Time to Pretend', artist: 'MGMT' }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]

function pluck(arr, key) {
  var finalArr = [];

  for (var i = 0; i < arr.length; i++) {
    finalArr.push(arr[i][key]);
  }
  return finalArr;
}

console.log(pluck(albums, 'artist'));

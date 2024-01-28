function booooo(n){
  for (let i = 0; i < n.length; i++){
    console.log('booooooo!');
  }
} // O(1)

booooo([1,2,3,4,5,6])
 // The space complexity for the above code is O(1) because we don't have control on the input that is the array can be of any length.

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for( let i = 0; i < n; i++){
    hiArray[i] = 'Hi'
  }
  return hiArray
}

arrayOfHiNTimes(6) // O(n),
// The major factors of the space complexity is based on the 4 factors :
// 1. Variables
// 2. Data Structures
// 3. Function Call
// 4. Allocations

// The method arrayOfHiNTimes has Variables and Data structures created so its by default O(n)
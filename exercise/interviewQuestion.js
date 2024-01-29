//Given 2 arrays, create a function that let's a user know (true/false) whether thoese two arrays contain any common items
// For Example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//------------------------------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'x']
// should return false.

function findCommonElement(array1, array2){
 for (let i=0; i < array1.length; i++){
  for (let j = 0; j < array2.length; j++){
    if (array1[i] === array2[j]){
      return true;
    }
  }
 }
 return false;
}


const array1 = ['a','b','c','x'];
const array2 = ['z', 'y', 'i'];
console.log(findCommonElement(array1, array2))

const array3 = ['a','b','c','x'];
const array4 = ['z', 'y', 'x'];
console.log(findCommonElement(array3, array4))

// The above approach isn't great because the BigO is O(n^2) as it has loop inside the loop.


function findCommonElement2(array1, array2){
  let map= {};
  for (let i=0; i < array1.length; i++){
    if(!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
  }

  // loop through second array and chack if item in second array exists on created object.
  for (let j=0; j < array2.length; j++){
    if (map[array2[j]]){
      return true;
    }
  }
return false
}

console.log(findCommonElement2(array1, array2))
console.log(findCommonElement2(array3, array4))

// The above function findCommonElement2 is better as it's has BigO = O(a + b).
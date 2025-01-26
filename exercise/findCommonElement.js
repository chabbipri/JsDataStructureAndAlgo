//Given 2 arrays, create a function that let's a user know (true/false) whether thoese two arrays contain any common items
// For Example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//------------------------------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z', 'y', 'x']
// should return false.

function findCommonElement(elements1, elements2){
  let map = {};
  for (i = 0; i < elements1.length; i++){
    map[elements1[i]] ??= true;
  }

  for (i = 0; i < elements2.length; i++){
    if (map[elements2[i]]){
      return true;
    }
  }
  return false;
}

// O(n) = O(a + b)

const ele1 = ['a','b','c','x'];
const ele2 = ['z', 'y', 'i'];
console.log(findCommonElement(ele1, ele2));


const array1 = ['a','b','c','x'];
const array2 = ['z', 'y', 'x']
console.log(findCommonElement(array1, array2));
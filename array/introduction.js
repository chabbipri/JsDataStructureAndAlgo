// Arrays :
// lookup => O(1)
// push => O(1)
// insert => O(n)
// delete => O(n)


const strings = ['a','b','c','d']
// 4*4 = 16bytes of storage
// The computer knows where to find the item by the index number. One should know the index of the value.

// Push : Add something at the end of the array.
strings.push('e'); //O(1)
console.log(strings)

// Pop: Removes the last element of the array
strings.pop(); // O(1)
strings.pop(); //

console.log(strings)

// Unshift : Adds element at the beging of the array, as the element needs to be added at the beging of the array, we need to move all the elements and than add the ne
strings.unshift('x') // O(n)
console.log(strings)

//splice : BigO = O(n/2) => O(n)
strings.splice(2, 0, 'alien')
// 2 : Index where we want to add the new element
// 0 : Index of the element we want to delete, as we didn't wanted to delete anything as 0
console.log(strings)


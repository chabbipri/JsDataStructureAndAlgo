// Readable Code

const nemo = ['Nemo'];

function findNemo(array){
  for ( i = 0; i < array.length; i++){
    if (array[i] === 'Nemo'){
      console.log('Found Nemo!')
    }
  }
}

// findNemo(nemo);

// Scaleable Code
// Example : 2
const nemo1 = ['Nemo'];
const array100 = new Array(100).fill('Nemo');
const array1000 = new Array(1000).fill('Nemo');

function findNemo(array){

  for ( i = 0; i++ ; i < array.length){
    if (array[i] === 'Nemo');{
      console.log('Found Nemo!');
    }
  }
  // const t1 = performance.now();

  // console.log("Time taken to run the function findNemo: " + (t1 - t0) + "  Milliseconds")
}

findNemo(nemo1)
findNemo(array100)
findNemo(array1000)

// O(n) : Linear Time : 2nd Best Notation.
// The no.of elements increases the no.of operation increases.
// In the Example 2: The array nemo1 is O(1) as the array length is 1.
// In the Example 2: The array100 nemo1 is O(100) as the array length is 100.
// In the Example 2: The array1000 nemo1 is O(1000) as the array length is 1000.

// Example 3 : Constant Notation : Best Notation in Big O concept.
// No matter how many times we call the operation with the specific address of the array, each time the notaion will be O(1)
const numbers = [1, 2, 3, 4, 5, 6]

function constTime(array){
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
  console.log(array[3]); // O(1)
}

constTime(numbers)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction();   // O(n)
    let stranger = true; // O(n)
    a++;                 // O(n)
  }                      // O(n) or the O(input.length)
  return a; // O(1)
}

// BigO = O(1 + 1 + 1) + O(4n)
// BigO = O(3 + 4n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
  }
  // Big O = 4 + 7n = O(n)







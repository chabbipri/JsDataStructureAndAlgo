// O(n) - Linear Loop.
// No.of elements increases with the no.of operations.

const nemo = ['nemo'];
const everyone = ["dory", "bruce", "marlin", "nemo", "grill", "bloat", "nigel", "squit", "darla", "hank"]
const large = new Array(100).fill("nemo");

function findNemo(array) {
  const { performance } = require('perf_hooks');
  let t0 = performance.now();
  for (let i=0; i < array.length; i++){
    if (array[i] === 'nemo') {
      console.log("Found Nemo")
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took: " + (t1-t0) + " milliseconds")
}

// findNemo(nemo)
// findNemo(everyone)
// findNemo(large)

//O(1) - Constant Time
const boxes = [1,2,3,4,5,6]

function logFirstBox(boxes){
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstBox(boxes);

// O(n ^ 2) : Horrible
// Log all pair of Array
const array = ["a", "b", "c", "d", "e"];


function logAllPairsOfArray(array){
  for (i = 0; i < array.length; i++){
   for (j = 0; j < array.length; j++){
    console.log(array[i], array[j])
    } // O(n)
  } // O(n)
}

// Big O = O(n ^ 2)
logAllPairsOfArray(array)


// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n), because this will be called the number of times of the input.
    let stranger = true; // O(1)
    a++; // O(n)
  } // O(n)
  return a; // O(1)
}
// Big O = O(1) + O(1) + O(1) + O(1) + O(n) + O(n)
// Big O = O(4) + O(2n) => O(4 + 2n)


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




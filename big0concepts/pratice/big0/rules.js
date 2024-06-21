// Rule 1 : Worst Case

const everyone = ["dory", "bruce", "marlin", "nemo", "grill", "bloat", "nigel", "squit", "darla", "hank"]

function findNemo(array) {
  const { performance } = require('perf_hooks');
  let t0 = performance.now();
  for (let i=0; i < array.length; i++){
    if (array[i] === 'nemo') {
      console.log("Found Nemo");
      break; // NO need to log to all the values once the expected value is found.
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took: " + (t1-t0) + " milliseconds")
}

findNemo(everyone)
// The best case of using the break is th at the nemo is the first element in the array.
// The worst case will be that nemo is the last element of the array.


// Rule 2: Remove Constants.

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // O(1)
    var index = 0; // O(1)

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    } // O(n/2)

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    } // O(100)
}

// Big O = O(2) + O(100) + O(n/2)
// Big O = O(102 + n/2) ==> Remove constants
// Big O = O(n)

// Rule 3: Different terms of input.

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(boxes){
    console.log(boxes);
  } // O(a), the length belongs on the length if boxes

  boxes2.forEach(boxes2){
    console.log(boxes2);
  } // O(b), the length belongs on the length if boxes2
}

// Big O = O(a + b )
// The length of elemnts in boxes and boxes2 can be different, thats the reason when the n of each is added.


// Rule 4: Drop Non Dominant.

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function(number) {
    console.log(number);
  }); // O(n)

  console.log("and these are their sums:");
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
} // O(n ^ 2)

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// Big O = O(n) + O(n ^ 2)
// O(n^2)


































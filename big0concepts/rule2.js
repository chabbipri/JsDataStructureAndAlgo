// Rule 2: Remove Constants


function printFirstItemThenFirstHelfThenSayHi100Times(items){
  console.log(items[0]);   // O(1)

  var middleIndex = Math.floor(items.length / 2);  // O(1)
  var index = 0; // O(1) Variable Assignment

  while (index < middleIndex){
    console.log(items[index]);
    index++; // O(1) Simple Index Calculation
  } // O(n/2)

  for (var i=0; i < 100; i++){
    console.log('Hi');
  } // O(100)
}

// Big O = O(3 + n/2 + 100)

// Ignore the variable assignment and simple calculations
// Big O = O(1 + n/2 + 100)
// Big O = O(n/2 + 101)

// Dropping the constants as it doesn't matter if n is a million number so 100 extra doesn't count.
// Big O = O(n/2) ==> O(n) Further simplifications by dropping the constants.

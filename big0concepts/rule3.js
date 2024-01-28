// Rule 3: Different terms for inputs
// We add the loops when the loops are seprate and are feeded with different variables and we multiple if we see an nested loops.

function compressBoxestwice(boxes){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });  //O(n)

    boxes.forEach(function(boxes){
    console.log(boxes);
  }); //O(n)
}

// BigO = O(2n)
// Apply the rule 2 Drop the contsants
// BigO = O(n)


// Explanation on the Rule2

function compressBoxestwice(boxes, boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });  //a => O(n)

    boxes2.forEach(function(boxes){
    console.log(boxes);
  }); //b => O(n)
}

// BigO = (a + b)

// Different terms i.e, variable are used for two different loops so its a for boxes and b for boxes2


//Log all pair of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(array[i],array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

// Nested loops will be multiplication of the loops, as above example 'compressBoxestwice' the loops were seprate we had addition of the loops.
// Big O = (n * n);
// Big O = (n^2)

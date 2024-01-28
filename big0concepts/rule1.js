// Big O Rule 1: Worst Case
// Adding the break will avoid the wanted loops.
// This solution doesn't work if the value we are looking is at the end of the array.
// Helpful only when the value is at the start or middle of the array, in that case we can avoild the looping when we get the result.


const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100000).fill('nemo');

function findNemo(array){
  for (let i =0; i < array.length - 1; i++){
    if (array[i] === 'nemo'){
      console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyone);
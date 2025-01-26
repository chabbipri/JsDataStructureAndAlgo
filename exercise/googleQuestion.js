// Find the pair of numbers which adds to the sum number provided.
// array1 = [1, 2, 3, 9], sum = 8, Output: No
// array2 = [1, 2, 4, 4], sum = 8, Output: Yes


function sumPairs(numbers, sum){
 numbers.sort(); // O(n)
 // console.log(numbers);
 for(i = numbers.length - 1 ; i >= 0 ; i--){
  // console.log(i);
  const num1 = numbers[i];
  const num2 = sum - num1;
    if (numbers.slice(0..i-1).includes(num2)){ // O(n)
      return [num1, num2]
    }
 }
 return false;
}

// numbers = [2, 1, 2, 4, 4]
// sum = 8
// console.log(sumPairs(numbers, sum));

function sumPairsWithSets(numbers, sum){
  let num2 = new Set();

  for(i = 0; i < numbers.length; i++){
    let num1 = numbers[i];
    if (num2.has(num1)){
      return true;
    } else{
      num2.add(sum - num1);
    }
  }
  return false;
}

numbers = [2, 1, 2, 4, 4]
sum = 8
console.log(sumPairsWithSets(numbers, sum));

numbers = [1, 2, 3, 9]
sum = 8
console.log(sumPairsWithSets(numbers, sum));
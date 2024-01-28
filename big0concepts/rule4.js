// Rule 4 : Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers){

  console.log('there are the numbers;');
  numbers.forEach(function(number){
    console.log(number);
  }); // O(n)

  console.log('and these are theit sums:');
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    }); //O(n)
  }); // O(n) ==> O(n^2)
}

numbers = [1,2,3,4,5]
printAllNumbersThenAllPairSums(numbers)

// Big O = O(n + n^2)
// Always keep the dominant term
// Big O = O(n^2)
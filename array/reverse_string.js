//Create a function that reverses a string.
// Example string = 'Hi my name is Nemo'
// 'omeN si eman ym iH'

function reverse(string) {
  // Validation
  if (string.length < 2 || typeof string !== 'string' || !string){
    return 'Provide Valid Input'
  }
  const strArray = string.split("");
  const reverseArray = [];

  for (i = strArray.length - 1 ; i >= 0; i-- ){
    reverseArray.push(strArray[i]);
  }
  return reverseArray.join("");
}

const string = 'My Name is Nemo'
console.log(reverse(string));


// Solution 2
function reverse2(str){
  return str.split('').reverse().join('')
}

const string2 = 'My Name is Whatever'
console.log(reverse(string2));

// Solution 3.
const reverse3 = str => [...str].reverse().join('');

const str = 'My Name is Whatever'
console.log(reverse3(str));
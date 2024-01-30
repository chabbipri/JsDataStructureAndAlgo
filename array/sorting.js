function sortArray(array1, array2){
  var array = array1.concat(array2);
  var newArray = [];

  while(array.length){
    let smallest = leastNumber(array);
    console.log(smallest);
    newArray.push(...array.splice(smallest, 1));
  }
  return newArray;
}

const leastNumber = (arr)=> {
  var minVal = arr[0];
  var index = 0;

  for(i = 1; i <= arr.length - 1; i++){
      if(minVal > arr[i]){
        minVal = arr[i];
        index = i;
      }
  }
  return index;
}

const array1 = [1,4,5];
const array2 = [0,2,7,3];
console.log(sortArray(array1, array2));

////////////////////////////////////////////

function sortArray2(arr){
  let result = [];
  for(i=0;i<=arr.length-1;i++){
    result[arr[i]] = arr[i];
  }

  for(i=result.length-1; i>=0; i--){
    if(result[i]===undefined){
      result.splice(i,1)
    }
  }
  return result;
}

console.log(sortArray2([9,2,3,5,1,0,7]))
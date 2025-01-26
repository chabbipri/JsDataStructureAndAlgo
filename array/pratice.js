class MyArray{
  constructor(){
   this.length = 0;
   this.data = {};
  }

  get(index){
    return this.data[index];
  }

  //Push: Adds values at the end of the array.
  push(value){
    this.data[this.length] = value;
    this.length ++;
    return this.length;
  }

  //Pop: Delete the last element.
  pop(){
    let lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length --;
    return lastElement;
  }

  // Delete
  delete(index){
    let deleteElement = this.data[index];
    this.shiftItems(index);
    return this.data;
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length --;
  }
}

// const newArray = new MyArray;
// newArray.push("Hello");
// newArray.push(", how");
// newArray.push("are you")

// newArray.push("Delete Me")
// newArray.pop();

// newArray.push("Delete Me Again")
// newArray.delete(1)
// console.log(newArray);



// Reverse a String

function reverserString(string){
 let arrayOfString = string.split('');
 let lengthOfString = arrayOfString.length;

 if (lengthOfString == 1) {
  return "The String can't be reversed."
 }

 let reverserString = new Array;

 for (i = 0; i < lengthOfString; i++){
  reverserString[i] = arrayOfString.pop();
 }
 return reverserString.join('');
}

// const string = "Hello, I need to be reversed."
// console.log(reverserString(string));

// const string1 = "H"
// console.log(reverserString(string1));

// Sorting of the array.

function sort(array){
  let n = array.length;
  let swapped;

  do {
    swapped = false;

    for (i = 0; i < n - 1; i++){
      if (array[i] > array[i + 1]){
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
      }
    }
    n --;
  } while(swapped);
  return array
}

function mergeAndSortTwoArrays(array1, array2){
  for (i = 0; i < array2.length; i++){
    array1.push(array2[i]);
  }

  let sortedArray = sort(array1);
  return sortedArray
}

const array1 = [1, 4, 5, 2]
const array2 = [3, 7, 9, 10]
console.log(mergeAndSortTwoArrays(array1, array2))






































class MyArray{
  constructor(){
    this.length = 0
    this.data = {};
  }

  // Get Index
  get(index){
    return this.data[index]
  }

  // Push: Add the element at the end of the array.
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Pop : Removes the last emement of the array/
  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length --;
    return lastItem;
  }

// Delete :
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length --;
  }
}





const newArray = new MyArray();
newArray.push("Hi");
newArray.push("Hello");
newArray.push("Delete Me");
// Puts the array
console.log(newArray);

// Delete the last element
newArray.pop();
console.log(newArray);

newArray.push("Delete the Index")
newArray.delete(1);
console.log(newArray);

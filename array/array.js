// Static Array : Fix set of elements, which is seting the fixed value of memory.
// Dynamic Array : The array can be modified as used.

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item;
    this.length++ ;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

 delete(index){
  const item = this.data[index];
  this.shiftItems(index);
  return item;
 }

 shiftItems(index){
  for (let i = index; i < this.length - 1; i++)
  {
    this.data[i] = this.data[i+1]; // Moved the items by index of 1.
  }
  delete this.data[this.length -1]; // Deletes the last item.
  this.length--;
 }
}

const newArray = new MyArray();
newArray.push('Hello');
newArray.push('Hi');
newArray.push('!');
console.log(newArray);
newArray.delete(0);
// newArray.pop();

console.log(newArray);



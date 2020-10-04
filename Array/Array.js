class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getElementAtIndex(index) {
    return this.data[index];
  }
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}
const array = new Array(); //we are instantiating an object of Array class
array.push(12);
array.push(13); //pushing element
array.push(14);
array.push(10);
array.push(989);
array.pop(); //Popping element 989 
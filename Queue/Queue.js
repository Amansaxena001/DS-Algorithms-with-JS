function Queue() {
  this.items = [];
}

Queue.prototype.isEmpty = function () {
  return this.items.length == 0;
};
Queue.prototype.enqueue = function (val) {
  this.items.push(val);
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return "Underflow";
  }
  return this.items.shift();
};

Queue.prototype.frontElement = function () {
  if (this.isEmpty) {
    return "Queue is empty";
  }
  return this.items[0];
};
Queue.prototype.print = function () {
  let str = "";
  for (let i = 0; i < this.items.length; i++) {
    str += this.items[i] + " ";
  }
  return str;
};

const Q = new Queue();
Q.enqueue(5);
Q.enqueue(10);
Q.enqueue(15);
Q.enqueue(20);
Q.dequeue();
console.log(Q.print());

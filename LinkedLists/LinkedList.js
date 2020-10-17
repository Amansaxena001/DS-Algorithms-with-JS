function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function () {
  return this.head == null;
};

LinkedList.prototype.size = function () {
  let current = this.head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

LinkedList.prototype.prepend = function (val) {
  //create new node
  const node = {
    data: val,
    next: this.head,
  };
  this.head = node;
};

LinkedList.prototype.append = function (val) {
  const node = {
    data: val,
    next: null,
  };
  //check if list is empty
  if (this.isEmpty()) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  console.log(node);
};

LinkedList.prototype.contains = function (val) {
  const current = this.head;

  while (current !== null) {
    if (current.val === val) {
      return true;
    }

    current = current.next;
  }
  return false;
};

LinkedList.prototype.remove = function (val) {
  if (!this.contains(val)) {
    return;
  }
  if (this.head.data == val) {
    this.head = this.head.next;
    return;
  }

  let prev = null;
  let current = this.head;

  while (current.data !== val) {
    prev = current;
    current = current.next;
  }

  prev.next = current.next;
};

LinkedList.prototype.print = function () {
  let output = "[";
  let current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ",";
    }
  }

  output += "]";
  console.log(output);
};

var list = new LinkedList();
list.append(10);
list.append(20);

list.append(30);

// list.prepend(5);
list.print();

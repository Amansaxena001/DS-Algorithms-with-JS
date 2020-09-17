function DoublyLinkedList() {
  this.head = null;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.head == null;
};

DoublyLinkedList.prototype.size = function () {
  let current = this.head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

DoublyLinkedList.prototype.append = function (val) {
  let node = {
    data: val,
    prev: null,
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

    node.prev = current;
    current.next = node;
    current = node;
  }
};

//checking if DL has the element we are looking for
DoublyLinkedList.prototype.contains = function (val) {
  let current = this.head;

  while (current !== null) {
    if (current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

DoublyLinkedList.prototype.remove = function (val) {
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
  current.next = prev;
  console.log(node);
};

const DL = new DoublyLinkedList();

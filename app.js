class linkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }
  append(value) {
    if (!(value instanceof node)) value = new node(value);
    if (this.head == null) {
      this.head = value;
      this.tail = value;
      return;
    }
    this.tail.next = value;
    this.tail = value;
  }
  prepend(value) {
    if (!(value instanceof node)) value = new node(value);

    if (this.head == null) {
      this.head = value;
      this.tail = value;
      return;
    }
    value.next = this.head;
    this.head = value;
  }
  size() {
    let current = this.head;
    let size = 0;
    while (current != null) {
      size++;
      current = current.next;
    }
    return size;
  }
  getHead() {
    return this.head.value;
  }
  getTail() {
    return this.tail.value;
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  pop() {
    let current = this.head;
    let previous = null;
    while (current != this.tail) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;
    return current.value;
  }
  contains(value) {
    let current = this.head;
    while (current != null && current.value != value) {
      current = current.next;
    }
    return current != null;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current != null && current.value != value) {
      current = current.next;
      index++;
    }
    return current == null ? null : index;
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current != null) {
      string += `${current.value} => `;
      current = current.next;
    }
    string += "null";
    return string;
  }
}
class node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

let l = new linkedList();
l.append(1.2);
l.prepend(2);
l.append(3);
l.append(4);
l.append(5);
l.prepend(1);

console.log(l.toString());
console.log(l.contains(1.22));
console.log(l.find(2));

console.log(l.at(2));
console.log(l.size());
console.log(l.pop());
console.log(l.toString());

console.log(l.getHead());
console.log(l.getTail());

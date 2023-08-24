import { Node } from '@/classes/node';

export class SingleLinkedList {
  head: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val: number) {
    let newNode = new Node(val, this.length + 1);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;

    return this;
  }

  unshift(val: number) {
    let newNode = new Node(val, 1);

    this.length += 1;
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let lastNode = this.head;
    while (lastNode.next !== null) {
      lastNode.position += 1;
      lastNode = lastNode.next;
    }
    lastNode.position += 1;
    lastNode.next = newNode;
    return;
  }

  addAtPosition(val: number, pos: number) {
    let newNode = new Node(val, pos);

    if (!this.head) {
      this.head = newNode;
      this.length += 1;
      return this;
    }

    let nodeCopy = this.head;
    while (nodeCopy?.position != pos) {
      if (nodeCopy.next === null) {
        break;
      }
      nodeCopy.position += 1;
      nodeCopy = nodeCopy.next;
    }
    nodeCopy.position += 1;
    newNode.next = nodeCopy.next;
    nodeCopy.next = newNode;
    this.length += 1;

    return;
  }

  isPalindrome() {
    let nodeCopy = this.head;
    let stack = [];
    let isPali = true;

    while (nodeCopy !== null) {
      stack.push(nodeCopy.data);
      nodeCopy = nodeCopy.next;
    }
    while (this.head !== null) {
      const paliCheck = stack.pop();

      if (this.head.data != paliCheck) {
        isPali = false;
        break;
      }

      this.head = this.head.next;
    }
    return isPali;
  }

  next() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
}

import { Node } from '@/classes/node';

export class SingleLinkedList{
  head: any;
  constructor(){
    this.head=null
  }

  push(val:number){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
    }
    else{
      newNode.next=this.head;
      this.head=newNode;
    }

    return this;
  }

  unshift(val:number){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      return this;
    }
    let lastNode=this.head;
    while(lastNode.next!==null){
      lastNode=lastNode.next;
    }
    lastNode.next=newNode;
    return;
  }

  next(){
    this.head=this.head.next;
  }
}

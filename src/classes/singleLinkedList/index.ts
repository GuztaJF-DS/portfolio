import { Node } from '@/classes/node';

export class SingleLinkedList{
  head: any;
  length: number;
  constructor(){
    this.head=null
    this.length=0;
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
    this.length += 1;

    return this;
  }

  unshift(val:number){
    let newNode = new Node(val);

    this.length += 1;
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

  addAtPosition(val:number){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.length += 1;
      return this;
    }

    console.log(this);
    let lastNode=this.head;
    console.log(lastNode)
    while(lastNode.next.data!==4){
      lastNode=lastNode.next;
      if(lastNode===null){
        return;
      }
    }
    console.log('  ')
    newNode.next=lastNode.next;
    lastNode.next=newNode
    console.log('newNode',newNode)
    console.log('lastNode',lastNode)
    console.log('this.head',this.head)
    this.length += 1;
    return;
  }

  next(){
    this.head=this.head.next;
  }
}

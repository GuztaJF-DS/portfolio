import { Node } from '@/classes/node';

export class SingleLinkedList{
  head: any;
  length: number;
  constructor(){
    this.head=null;
    this.length=0;
  }

  push(val:number){
    let newNode = new Node(val, this.length+1);

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
    let newNode = new Node(val,1);

    this.length += 1;
    if(!this.head){
      this.head = newNode;
      return this;
    }
    let lastNode=this.head;
    while(lastNode.next!==null){
      lastNode.position+=1;
      lastNode=lastNode.next;
    }
    lastNode.position+=1;
    lastNode.next=newNode;
    return;
  }

  addAtPosition(val:number, pos:number){
    let newNode = new Node(val,pos);

    if(!this.head){
      this.head = newNode;
      this.length += 1;
      return this;
    }

    let lastNode=this.head;
    while(lastNode?.position!=pos){
      if(lastNode.next===null){
        break;
      }
      lastNode.position+=1;
      lastNode=lastNode.next;
    }
    lastNode.position+=1;
    newNode.next=lastNode.next;
    lastNode.next=newNode;
    this.length += 1;

    return;
  }

  next(){
    this.head=this.head.next;
  }
}

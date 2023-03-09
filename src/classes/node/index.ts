export class Node{
  data: number | null = null;
  next: Node | null = null;
  constructor(val:number){
    this.data = val;
    this.next = null;
  }
};

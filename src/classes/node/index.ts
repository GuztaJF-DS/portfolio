export class Node {
  data: number | null = null;
  position: number;
  next: Node | null = null;
  constructor(num: number, pos?: number) {
    this.data = num;
    this.position = pos || 1;
    this.next = null;
  }
}

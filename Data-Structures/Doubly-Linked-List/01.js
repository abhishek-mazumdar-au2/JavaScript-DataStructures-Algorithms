class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
var list = new DoublyLinkedList();
var first = new Node(1);
console.log(first)
first.next = new Node(2)
console.log(first);
first.next.prev = first;
console.log(first.next);
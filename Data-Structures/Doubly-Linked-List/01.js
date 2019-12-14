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
    // -------PUSH-------
    push(val){
        var newNode = new Node(val);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            const prevTail = this.tail;
            this.tail.next = newNode;
            newNode.prev = prevTail;
            this.tail = newNode;
        }
        this.length++
        return this
    }

    // -------POP--------
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail  = null;
        } else{
            var newTail = poppedNode.prev;
            this.tail = newTail;
            newTail.next = null;
        } this.length--
        return this;

        }
    }

// var list = new DoublyLinkedList();
// var first = new Node(1);
// console.log(first)
// first.next = new Node(2)
// console.log(first);
// first.next.prev = first;
// console.log(first.next);

var list = new DoublyLinkedList();
console.log(list);
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.push(4))
console.log(list.push(5))

console.log(list.pop());
console.log(list.tail);

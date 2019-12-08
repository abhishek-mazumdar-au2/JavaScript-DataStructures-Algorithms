// node contains a piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //                                 .......Instances of the Class........
    // ....PUSH....
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    // .....TRAVERSE......
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    // .......POP.........
    pop(){
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--
        return current
    }

}












var list = new SinglyLinkedList();
console.log(list);
list.push(1)
list.push(2);
list.push(3);
list.push(4);
console.log(list);
console.log(list.pop());
list.push(5);
console.log(list);
list.pop()
console.log(list);
// var first =  new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?')
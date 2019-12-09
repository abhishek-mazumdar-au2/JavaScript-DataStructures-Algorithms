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

    //  ......SHIFT....... takes out the head element and return that.
    shift(){
        var shiftedElem = this.head;
        if(this.head){
            this.head = shiftedElem.next;
            this.length--;
            return shiftedElem.val;

        } 
        if(!this.head){
            return undefined
        }
    }

    // .......UNSHIFT.......
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            newNode = this.tail;
        } else {
            var currentHead = this.head;
            this.head.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // .......GET.......
    get(index){
        if(this.length<index || index < 0) return undefined;
        var counter = 0;
        var current = this.head;
        while(counter!==index){
            current = current.next;
            counter++
        } return current
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
console.log('.......');
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
list.unshift(1);
console.log(list.unshift(2));
console.log(list)
console.log(list.get(1));
console.log(list.get(0));
// var first =  new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you?')
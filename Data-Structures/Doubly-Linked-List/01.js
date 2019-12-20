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
    // -------SHIFT-------
    shift(){
        if(!this.head) return undefined;
        var shiftedNode = this.head;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = shiftedNode.next;
            this.head.prev = null;
        } this.length--
        return this;
    }
//-------UNSHIFT-------
unshift(val){
if(!this.head){
    this.head = newHead;
    this.tail = newHead;
} else {
    var newHead = new Node(val);
    var nextHead = this.head;
    this.head = newHead;
    newHead.next = nextHead;
}
this.length++
return this
}

// -------GET-------
get(index){
    if(this.length===0 || index < 0 || index > this.length)return undefined;
     let pointer = this.head;
    let counter = 0;
    while(counter!==index){  
        pointer = pointer.next;
        counter++;
    }
     return pointer;
}

// -------SET-------
set(index, val) {
    if (!this.head){
        this.head = new Node(val);
        this.tail = new Node(val);
    }
    else if(index < 0 || index > this.length) return undefined
    else {
        let changeItsVal = this.get(index);
        changeItsVal.val = val;
       } 
    return this
}

//-------insert-------
insert(index, val){
   if(index<0 | index>this.length) return undefined;
   if(index===0) return this.unshift(val);
   if(index===this.length) return this.push(val);
   var beforeNode = this.get(index-1);
   var newNode = new Node(val);
   var  afterNode = beforeNode.next;
   beforeNode.next = newNode;
   newNode.prev = beforeNode;
   newNode.next = afterNode;
   afterNode.prev = newNode;
   this.length++
   return this;
}

// --------REMOVE--------
remove(index) {
    if(index<0||index>this.length) return undefined;
    if(!this.head) return undefined;
    if(index===0) return this.shift()
    if(index===this.length) return this.pop()
    let previous = this.get(index-1)
    let nex = this.get(index+1)
    previous.next = nex;
    nex.prev = previous;
    this.length--
    return this;
}

// -------REVERSE--------
reverse (){

    if(this.length == 0){
        return null;
    }
    else if(this.length > 1){
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        for(let i = 0; i < this.length; i++){
            prevNode  = currNode.prev;
            nextNode = currNode.next;

            if(prevNode == null){
                this.tail = currNode;
                currNode.next = null;
                currNode.prev = nextNode;
            }
            else if(nextNode == null){
                this.head = currNode;
                currNode.prev = null;
                currNode.next = prevNode;
            }
            else{
                currNode.next = prevNode;
                currNode.prev = nextNode;
            }

            currNode = nextNode;
        }
    }
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
// console.log(list.tail);
console.log("..................................");
console.log(list.shift());
console.log('...................................');
console.log(list.unshift('firstElement'));
console.log(list.head);
console.log('//////////////////////////////');
console.log(list.get(0));
console.log(list.set(0, 'changedValue'))
console.log('--------------------------------------------------------------');
console.log(list);
console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ [[[[[[[[[[[[[ [[[[[[[[[[[[[[[[ [[[[[[[[[[[');
console.log(list.insert(2, 'the third index'))
// console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ [[[[[[[[[[[[[ [[[[[[[[[[[[[[[[ [[[[[[[[[[[');

// console.log(list)
// list.remove(0)
// console.log(list.remove(0));


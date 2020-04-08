import  {Node}  from './node'
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
    this.count = 0; // {2}
    this.head = undefined; // {3}
    this.equalsFn = equalsFn; // {4}
    }
    push(element) {
        const node = new Node(element); // {1}
        let current; // {2}
        if (this.head == null) { // {3}
        this.head = node;
        } else {
        current = this.head; // {4}
        while (current.next != null) { // {5} get last item
        current = current.next;
        }
        // and assign next to new element to make the link
        current.next = node; // {6}
        }
        this.count++; // {7}
        }
    show(){
        return this;
    }
}
var LL = new LinkedList();
LL.push('myFirstElement')
LL.push('mySecondElement')
console.log(LL.show());

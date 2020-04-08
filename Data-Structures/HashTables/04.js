// import defaultToString from "./defaultStrFn";
function defaultToString(item) {
    if (item === null) {
    return 'NULL';
    } else if (item === undefined) {
    return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
    }
    return item.toString(); // {1}
}

class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}
// --------------------------LINKED LIST---------------------------------
class Node {
    constructor(element) {
    this.element = element;
    this.next = undefined;
    }
}
function defaultEquals(a, b) {
    return a === b;
    }
class LinkedList {
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
class HashTable {
    constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
    }
    // the hash function
    loseloseHashCode(key) {
        if (typeof key === 'number') { // {1}
        return key;
        }
        const tableKey = this.toStrFn(key); // {2}
        let hash = 0; // {3}
        for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i); // {4}
        }
        return hash % 37; // {5}
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    // put(key, value): This method adds a new item to the hash table (or it can also update it)
    put(key, value) {
        if (key != null && value != null) { // {1}
        const position = this.hashCode(key); // {2}
        this.table[position] = new ValuePair(key, value); // {3}
        return true;
        }
        return false;
        }
    // remove(key): This method removes the value from the hash table using the key
    remove(key) {
        const hash = this.hashCode(key); // {1}
        const valuePair = this.table[hash]; // {2}
        if (valuePair != null) {
        delete this.table[hash]; // {3}
        return true;
        }
        return false;
    }
    // get(key): This method returns a specific value searched by the key
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    // show
    show(){
        return this.table
    }
    
    }
var ht = new HashTable()
ht.put('name', 'abhishek')
ht.put('country', 'India')
ht.put('sex', 'male')
console.log(ht.get('name'));
console.log(ht.remove('sex'));
console.log(ht.show());

    
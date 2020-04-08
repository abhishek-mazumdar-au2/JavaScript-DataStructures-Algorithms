function Node(element) {
    // store the node's data
    this.element = element;

    // store a link to the next node in the linked list
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}


function insert(newElement) {
    var newNode = new Node(newElement);
    var current = this.find("head");

    newNode.next = current.next;
    current.next = newNode;
}

function display(list) {
    var currNode = this.head.next;
    while (currNode != null) {
        console.log(currNode.element);
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while((currNode.next != null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;

}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next != null) {
        prevNode.next = prevNode.next.next;
    } 
}


/*****************************************************
                    Hash Table
*****************************************************/

function HashTable() {
    this.table       = new Array(137);
    this.betterHash  = betterHash;
    this.showDistro  = showDistro;
    this.put         = put;
    this.get         = get;
    this.buildChains = buildChains;
}

function put(key) {
    var pos = this.betterHash(key);
    this.table[pos].insert(key);
}

function get(key) {
    var pos = this.betterHash(key);
    return this.table[pos].find(key).element;
}

function betterHash(key) {
    var constant = 37;
    var total = 0;

    for (var i = 0; i < key.length; i++) {
        total += constant * total + key.charCodeAt(i);
    }
    total = total % this.table.length;

    if(total < 0) {
        total += this.table.length - 1;
    }

    return parseInt(total, 10);
}

function showDistro() {
    for(var i = 0; i < this.table.length; i++) {
        var currNode = this.table[i].head.next;
        while (currNode != null) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }
}

function buildChains() {
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = new LList();
    }
}

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 

for(var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();
hTable.get("David");  
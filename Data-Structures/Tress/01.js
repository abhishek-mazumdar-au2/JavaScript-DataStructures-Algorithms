// 1. Plane tress
// 2. Binary Search Trees

// import { captureRejectionSymbol } from "events";

class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null
    }
    insert(val){
        const insertedNode = new Node(val);
        if(!this.root){ 
            this.root = insertedNode
            return this
        }
        var current = this.root;
        while(true){
            if(val === current.value) return undefined;
            if(val < current.value){
                if(current.left === null) {
                    current.left = insertedNode;
                    return this;
                }
                current = current.left;
            }
            if(val > current.value){
                if(current.right === null){
                    current.right = insertedNode;
                    return this;
                }current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
}
    contains(value){
        if(!this.root) return false;
        var current = this.root;
        var found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        } return false
    }
    BFS(){
        var queue = [];
        var arrived = [];
        if(!this.root) return false;
        var current = this.root;
        queue.push(current)
        while(queue.length){
            current = queue.shift();
            console.log("Our current is: "+current.value)    
            arrived.push(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
        }return arrived;
    }
    DFSPreOrder(){
        var data = [];
        var node = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(node)
        return data;
    }
    DFSPostOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(current)
        return data
    }
    DFSInOrder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
//         10  
//     7        13
//  4     8         15 

}


var myTree = new BST();
myTree.root = new Node(10);
myTree.root.left = new Node(7);   // should be less that 10
myTree.root.right = new Node(13); // should be greater than 10
myTree.root.left.left = new Node(4);
myTree.root.left.right = new Node(8);
myTree.root.right.right = new Node(15);
console.log(myTree)
// console.log(myTree.insert(5));
console.log(myTree.find(8));
console.log(myTree.contains(19));
console.log(myTree.BFS());
console.log(myTree.DFSPreOrder());
console.log(myTree.DFSPostOrder());
console.log(myTree.DFSInOrder());


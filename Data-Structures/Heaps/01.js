// Heap iomplementaton

class MaxHeap{
    constructor(){
        this.values = []
    }

    // insert
    insert(val){
        this.values.push(val)
        return this.bubble()
        // return this;
    }

    bubble(){
        let idx = this.values.length-1;
        let idxP = Math.ceil((idx-2)/2)
        console.log(this.values+" Heap")
        console.log(this.values[idx]+" element");
        console.log(this.values[idxP]+" Parent");
      while(this.values[idx]>=this.values[idxP]){
          //bubble up
          let child = this.values[idx];
          console.log(`swapped ${child} for ${this.values[idxP]}`);
          this.values[idx] = this.values[idxP];
          this.values[idxP] = child; 
          idx = idxP
          idxP = Math.ceil((idx-2)/2)
      }
return this.values
    }

    // Extract Max
    extractMax() {
        let theArray = this.values;
        let idxMax = 0; // This is a max-heap.
        let maxElem = theArray[idxMax];
        let leaf = theArray[theArray.length-1]
        maxElem = leaf;
        this.values[0]=leaf
        this.values.pop()
        return this.sinkDown()
    }

    // sinkDown
    sinkDown(){
        let theArray = this.values;
        console.log(theArray)
        let n = 1
        let parent = theArray[0]
        let leftChild = theArray[2n]
        let rightChild = theArray[2n+1]
        if(parent>rightChild&&parent>leftChild) break;
        while(rightChild>leftChild){
            let newParent = parent
            parent = rightChild;
            rightChild = newParent;
            n = 2n+1;
        }
        while(leftChild>rightChild){

        }
        while(leftChild>parent){
            let newParent = parent
            parent = leftChild;
            leftChild = newParent;
            n = 2n;
        }
        while(rightChild>parent){
            let newParent = parent
            parent = rightChild;
            rightChild = newParent;
            n = 2n+1;
        }
        this.sinkDown()
    }

}

var heap = new MaxHeap()













console.log(heap.insert(49))
console.log(heap.insert(42))
console.log(heap.insert(44))
console.log(heap.insert(43))
console.log(heap.insert(45));
console.log(heap.insert(22));
console.log(heap.insert(50));
console.log(heap.insert(54));

cheap.extractMax()
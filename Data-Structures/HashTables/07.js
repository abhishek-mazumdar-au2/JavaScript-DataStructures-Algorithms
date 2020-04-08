class HashTable {
    constructor(size=4){
        this.keymap = new Array(size)
    }
    _hash(key){
        let total = 0;
        let WIERD_PRIME  = 17;
        for(let i=0; i<Math.min(key.length,100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96;
            total = (total*WIERD_PRIME+value)%this.keymap.length;
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keymap[index]){
            this.keymap[index] = [];
        }
        this.keymap[index].push([key, value])
        return this.keymap;
    }
    get(key){
        let index = this._hash(key);
        if(this.keymap[index]){
            let arr = this.keymap[index];
            for(let i=0; i<=arr.length; i++){
                console.log(i)
                if(arr[i][0]===key) return arr[i]
            }
        }else {return "Not in DB"}
    }
    keys(){
        let returnArr = [];
        for (let i=0; i<this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j=0; j<this.keymap[i].length; j++){
                    if(!(returnArr.includes(this.keymap[i][j][0]))){
                        returnArr.push(this.keymap[i][j][0])
                    }
                }
            }
        }return returnArr
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keymap.length; i++){
          if(this.keymap[i]){
            for(let j = 0; j < this.keymap[i].length; j++){
              if(!valuesArr.includes(this.keymap[i][j][1])){
                valuesArr.push(this.keymap[i][j][1])
              }
            }
          }
        }
        return valuesArr;
      }
    }


const ht = new HashTable();
console.log(ht.set("hello world", "greeting"))
console.log(ht.set("dogs", "cast"))
console.log(ht.set("school", "coaching"))
console.log(ht.set("country", "India"))
console.log(ht.get("country"))
console.log("-------------------")
console.log(ht.values())
console.log(ht.keys())

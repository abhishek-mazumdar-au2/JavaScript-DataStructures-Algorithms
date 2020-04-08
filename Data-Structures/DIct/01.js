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

class ValuePair {
    constructor(key, value) {
    this.key = key;
    this.value = value;
    }
    toString() {
    return `[#${this.key}: ${this.value}]`;
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn; // {1}
    this.table = {}; // {2}
    }

    set(key, value) {
        if (key != null && value != null) {
        const tableKey = this.toStrFn(key); // {1}
        this.table[tableKey] = new ValuePair(key, value); // {2}
        return true;
        }
        return false;
    }
    //has key
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
    // remove(key)
    remove(key) {
        if (this.hasKey(key)) {
        delete this.table[this.toStrFn(key)];
        return true;
        }
        return false;
    }

    keyValues(){
        var array = [];
        for (var k in this.table){
            if(this.hasKey(k)){
                array.push(this.table[k])
            }
        }
        return array
    }

    get(key) {
        if (this.hasKey(key)) {
        return this.table[this.toStrFn(key)];
        }
        return undefined;
    }
    keys(){
        return this.keyValues().map(x => x.key)
    }
    values(){
        return this.keyValues().map(x=>x.value)
    }
    size() {
        return Object.keys(this.table).length;
    }
    allClear(){
        this.table = {}
    }
    isEmpty(){
        if(this.size===0) return true
        else return false
    }
}

var myDict = new Dictionary();
myDict.set('name', "Abhishek");
myDict.set('country', "India");
myDict.set('age', "25");
console.log(myDict.keyValues());
myDict.remove('name')
console.log(myDict.get('name'));
console.log(myDict.keys())
console.log(myDict.values())
console.log(myDict.size())
console.log(myDict.isEmpty());
console.log(myDict.allClear());
console.log(myDict.isEmpty());




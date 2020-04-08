function Checking(amount) {
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function
    }

    function deposit(val){
        this.balance += val;
    }

    function withdraw(val){
        if(val <= this.balance){
            this.balance -= val
        }if(val>this.balance){
            console.log('Insufficient funds')
        }
    }

    function toString(){
        return 'Balance: '+this.balance;
    }


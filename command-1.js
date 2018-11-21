class Calculator {
    constructor() {
           this.currentValue = 0;
           this.commands = [];
        }
    
    add(value){
        return this.currentValue + value;
    }
    sub(value) {
        return this.currentValue - value;
    }
    
    getCurrentValue() {
        return this.currentValue;
    };  
}


function Command (fn, value) {
    this.execute = fn;
    this.value = value;
}

function add (value) {
    return value + this.value;
}

function AddCommand (value) {
    Command.call(this, add, value);
}


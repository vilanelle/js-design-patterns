class Calculator {
    constructor() {
                this._currentValue = 0;
                this.commands = [];
    }
    execute(command) {
        this._currentValue = command.execute(this._currentValue);
        this.commands.push(command);
    };
    undo() {
        var cmd = this.commands.pop();

        this._currentValue = cmd.undo(this._currentValue);
    };
    getCurrentValue() {
        return this._currentValue;
    };  
}

function Command (fn, undo, value) {
    this.execute = fn;
    this.undo = undo;
    this.value = value;
}

function add (value) {
    return value + this.value;
}
function AddCommand (value) {
    Command.call(this, add, sub, value);
}
function sub (value) {
    return value - this.value;
}
function SubCommand (value) {
    Command.call(this, sub, add, value);
}

var calc = new Calculator();
console.log(calc.getCurrentValue());
calc.execute(new AddCommand(2));
console.log(calc.getCurrentValue());
calc.execute(new SubCommand(1));
console.log(calc.getCurrentValue());
calc.undo();
console.log(calc.getCurrentValue());

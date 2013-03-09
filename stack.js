module.exports = function Stack() {
    
    var stack = []

    this.push = function(o) { stack.push(o); }

    this.pop = function() { 
        if(!this.isEmpty()) { return stack.pop(); } 
        else {
            console.log("ERROR: Trying to pop empty stack!");
            return false;
        }
    }

    this.isEmpty = function() { return (stack.length == 0); }

    this.size = function() { return stack.length; }
}

function testStack() {
    var stack = new Stack();
    stack.push(5)
    stack.push(4)
    stack.push(3)

    console.log(stack.pop());
    console.log(stack.pop());

    console.log(stack.size());
    console.log(stack.isEmpty());  

    console.log(stack.pop());
    console.log(stack.pop());
}


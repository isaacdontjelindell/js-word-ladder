function Stack() {
    
    var stack = []

    this.push = function(o) { stack.push(o); }

    this.pop = function() { 
        if(!this.isEmpty()) { return stack.pop(); } 
        else {
            console.log("ERROR: Trying to pop empty stack!");
            return false;
        }
    }

    this.peek = function() { return stack[stack.length - 1]; }

    this.isEmpty = function() { return (stack.length == 0); }

    this.size = function() { return stack.length; }

    this.asArray = function() {
        // this is a method that I'm using to externally clone a stack
        // .slice(0) is a trick to return a *copy* of the array.
        return stack.slice(0);
    }

    this.setArray = function(new_array) {
        // BE VERY CAREFUL- this replaces the contents of this stack with
        // whatever is in new_array
        stack = new_array;
    }

    this.toString = function() {
        str = 'BOTTOM \n';
        for(var i=0; i<stack.length; i++) {
            str += stack[i] + "\n"
        }
        return str += "TOP";
    }
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


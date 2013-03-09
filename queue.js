function Queue() {
    var queue = []

    this.enqueue = function(o) { queue.push(o); }

    this.dequeue = function() { 
        if(!this.isEmpty()) { return queue.shift(); }
        else {
            console.log("ERROR: Trying to dequeue from empty queue!");
            return false;
        }
    }

    this.isEmpty = function() { return (queue.length == 0); }

    this.size = function() { return queue.length; }
    
    this.toString = function() { 
        var str = "";
        for(var i=0; i<queue.length; i++) {
            str += queue[i].toString() + "\n";
        }
        return str;
    }
}

function testQueue() {
    var queue = new Queue();

    queue.enqueue(5)
    queue.enqueue(10)
    queue.enqueue(15)

    console.log(queue.dequeue())
    console.log(queue.dequeue())
    console.log(queue.dequeue())
}

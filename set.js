function Set() {
    var set = []

    this.add = function(o) {
        if(!this.contains(o)) {
            set.push(o);
            return true;
        } else {
            console.log("ERROR: Set already contains object " + String(o));
            return false;
        }
    }

    this.contains = function(o) {
        // is it more efficient to implement a hashmap or just use indexOf?
        if(set.indexOf(o) != -1) { return true; }
        else { return false; }
    }
}

function testSet() {
    var set = new Set()

    set.add("hello")
    set.add("foo")
    set.add("bar")

    console.log("hello: " + set.contains("hello"));
    console.log("foo: " + set.contains("foo"));
    console.log("test: " + set.contains("test"));
}


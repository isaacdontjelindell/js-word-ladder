// Isaac Dontje Lindell
// JavaScript word ladder
// https://github.com/isaacdontjelindell/js-word-ladder

/* REQUIRES: stack.js, queue.js, set.js (or equivalent data structures) */

/* TODO
   * Try using permutations algorithm - compare with possible permutations of each word
        instead of every word in wordlist
*/

function wordLadder() {
    var data = getStartingData();

    if(data.error) {
        data.error = "Error: You chose to use " 
                   + data.len 
                   + "-letter words, but entered a starting or ending word that was not the correct length!";
    }
    else {

        data.used_words.add(data.start); 
    
        var stack = new Stack(); // just an empty stack for now
        stack.push(data.start);

        findNextSteps(data, stack);
        var ladder = iterate(data); // this should find us a valid ladder
        if(!ladder) { 
            data.error = "Failed to find a valid ladder between " + data.start + " and " + data.end;
        }
        else {
            data.error = undefined;
            data.ladder = ladder
        }
    }
    showResults(data);
}

function findNextSteps(data, stack) {
    // Get the top word on the stack and search through the dictionary to find all
    // words that are one letter different, and have not already been used. 

    // do the search:
    for(var i=0; i<data.dict.length; i++) {
        if(findNumberOfDifferences(stack.peek(), data.dict[i]) == 1) {
            if(!data.used_words.contains(data.dict[i])) { 
                var st = cloneStack(stack);
                st.push(data.dict[i]); // add the new word (that only has 1 letter difference)
                data.queue.enqueue(st);
                data.used_words.add(data.dict[i]);
            }
        }
    }
    return true;
}

function iterate(data) {

    while (!data.queue.isEmpty()) {
        var current_stack = data.queue.dequeue(); // stack containing a possible ladder
        var top_word = current_stack.peek();

        if(top_word == data.end) { return current_stack; } // found a valid ladder - we're done
        else {
            findNextSteps(data, current_stack);       
        }
    }
    return false; // failed to find a ladder
}

function findNumberOfDifferences(word1, word2) {
    // find the number of letter differences between word1 and word2
    var d = 0;
    for(var i=0; i<word1.length; i++) {
        if (word1[i] != word2[i]) { d++; }
    }
    return d;
}

function getStartingData() {
    var data = {}

    // get form data
    data.start = document.getElementById("word1").value;
    data.end = document.getElementById("word2").value;
    data.len = parseInt(document.getElementById("length").value);
    if ((data.start.length != data.len) || (data.end.length != data.len)) {
        data.error = "word_length";
        return data;
    }
   
    // choose the dictionary
    if(data.len == 3) { data.dict = threeLetterWords; }
    else if(data.len == 4) { data.dict = fourLetterWords; } 
    else { data.dict = fiveLetterWords; }

    // structures for algorithm
    data.queue = new Queue();
    data.used_words = new Set();

    return data;
}

function cloneStack(orig_stack) {
    // returns a clone (deep copy) of orig_stack.
    // This uses some special methods in my stack class are pretty anti-OO - TODO reevaluate??
    var new_stack = new Stack();
    new_stack.setArray(orig_stack.asArray());
    return new_stack;
}

function showResults(data) {
    if(data.error) {
        document.getElementById("results").innerHTML = data.error;
    }
    else {
        var ul = document.createElement("ul"); 
        while(!data.ladder.isEmpty()) {    
            var li = document.createElement("li");
            li.innerHTML = data.ladder.pop()
            ul.appendChild(li);
        }
        ul.appendChild(document.createElement("li"));
        document.getElementById("results").innerHTML = ""; // clear any previous results
        document.getElementById("results").appendChild(ul);
    }
}



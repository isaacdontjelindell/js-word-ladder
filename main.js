var queue = new Queue();
var used_words = new Set();


function wordLadder(start, end) {
    used_words.add(start); // TODO should this be in findNextSteps?
    
    stack = new Stack(); // just an empty stack for now
    stack.push(start);

    findNextSteps(start, stack);
    ladder = iterate(end);
    console.log(ladder.toString());
}

function findNextSteps(start_word, current_stack) {
    //Get the starting word and search through the dictionary to find all words that
    //are one letter different, and have not already been used. 
    var dict;
    if(start_word.length == 3) { dict = threeLetterWords; }
    else if(start_word.length == 4) { dict = fourLetterWords; } 
    else { dict = fiveLetterWords; }

    // do the search:
    for(var i=0; i<dict.length; i++) {
        if(findNumberOfDifferences(start_word, dict[i]) == 1) {
            if(!used_words.contains(dict[i])) { 
                st = cloneStack(current_stack);
                st.push(dict[i]); // add the new word (that only has 1 letter difference)
                queue.enqueue(st);
                used_words.add(dict[i]);
            }
        }
    }
    return true;
}

function iterate(end_word) {

    while (!queue.isEmpty()) {
        var current_stack = queue.dequeue(); //stack containing a possible ladder
        var top_word = current_stack.peek();

        if(top_word == end_word) { return current_stack; }  // we're done
        else {
            findNextSteps(top_word, current_stack);       
        }
    }
    console.log("Failed to find a ladder.");
    return false;
}

function findNumberOfDifferences(word1, word2) {
    // find the number of letter differences between word1 and word2
    var d = 0;
    for(var i=0; i<word1.length; i++) {
        if (word1[i] != word2[i]) { d++; }
    }
    return d;
}

function cloneStack(orig_stack) {
    new_stack = new Stack();
    new_stack.setArray(orig_stack.asArray());
    return new_stack;
}

wordLadder("frat", "blue");


















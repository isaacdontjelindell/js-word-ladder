var word_len = 3;
var start_word = "bar";
var end_word = "tea";

function wordLadder(start, end) {
    used_words = new Set();
    queue = new Queue();

    used_words.add(start); // TODO should this be in findNextSteps?

    queue = findNextSteps(start, queue, used_words);
}

function findNextSteps(word, queue, used) {
    //Get the starting word and search through the dictionary to find all words that
    //are one letter different, and have not already been used. 
    var dict;
    if(word.length == 3) { dict = threeLetterWords; }
    else if(word.length == 4) { dict = fourLetterWords; } 
    else { dict = fiveLetterWords; }

    // do the search:
    for(var i=0; i<dict.length; i++) {
        if(findNumberOfDifferences(word, dict[i]) == 1) {
            if(!used_words.contains(dict[i])) { 
                st = new Stack();
                st.push(word); // add the original word
                st.push(dict[i]); // add the new word (that only has 1 letter difference)
                queue.enqueue(st);
                used.add(dict[i]);
            }
        }
    }
    return queue;
}

function findNumberOfDifferences(word1, word2) {
    // find the number of letter differences between word1 and word2
    var d = 0;
    for(var i=0; i<word1.length; i++) {
        if (word1[i] != word2[i]) { d++; }
    }
    return d;
}


wordLadder(start_word, end_word);

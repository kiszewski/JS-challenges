/**
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed.
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples: 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
 **/

function spinWords(text) {
    words = text.split(" ");

    return words.map((w) => {
        if(w.length >= 5) {
            console.log('is bigger')
            return w.split("").reverse().join("")
        } else {
            return w
        }
    }).join(" ")


}

Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");

import words from 'an-array-of-english-words';

const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Wilma', 'Betty', 'Harry', 'Wilma', 
    'Mort', 'Rick', 'Harry', 'Fred', 'Buck', 'Hank', 'Harry', 
    'Mort', 'Fred', 'Carl', 'Julie', 'James', 'Harry', 'Julie', 
    'Julie', 'Carl', 'Casper', 'Harry', 'Rick'];

// find the number of times each name was voted for.
// no hard coding names as vars, imagine the list can't be seen.

const tallyVotes = votes => {
    return votes.reduce((acc, name) => ({
        ...acc, // spread operator for the accumulator
        [name]: acc[name] ? acc[name] + 1 : 1, // format the spread data to show the name first, then the count
            // the turnary operator statement above states that if it is the first time seeing a name, make the count 1, otherwise count + 1

    }), {});
};

console.log(tallyVotes(electionVotes)); 

 /* -------------------------------*/

// find all the anagrams of the provided word in the dictionairy array.

const countOccurrences = arr =>   // helper function using an array and string. the 'word' array will be passed, and each word will be the string argument
    arr.reduce((acc, str) => ({
        ...acc, // spread operator for the accumulator
        [str]: acc[str] ? acc[str] + 1 : 1,  // formatting the data, changing each word to letters, and the number of each letter contained in the word
    }), {});
   
const hasSameLetterCount = (word1, word2) => {  // helper function to split the word provided, and the array words, into individual letter counts
    const word1Count = countOccurrences(word1.split(''));
    const word2Count = countOccurrences(word2.split(''));
    
    return Object.keys(word1Count).length === Object.keys(word2Count).length
        && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter]);
}

const findAnagrams = (word, allWords) => {
    return allWords.filter(entry => hasSameLetterCount(word, entry)).filter(anagram => anagram !== word);
}

console.log(findAnagrams('cinema', words));

/* --------------------------------------- */

// find a way to make the error messages for the conditions for each of the fields matching the keys. each key has different specifications

const currentInputValues = {
    firstName: 'Debo',  // must be at least 2 characters
    lastName: 'Russ',  // must be at least 2 characters
    zipCode: '65645',  // must be exactly five inegers
    state: 'ID',  // must be exactly two letters
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2 && value.match(/[a-z]/i)
            ? ''  // if true, return an empty string
            : 'First Name must be at least 2 characters long.'  // if not true, return this error message
    ],
    lastName: [
        value => value.length >= 2 && value.match(/[a-z]/i)
            ? ''  // if true, return an empty string
            : 'Last Name must be at least 2 characters long.'  // if not true, return this error message
    ],
    zipCode: [
        value => value.length === 5 && value.match(/[0-9]/i)
            ? ''
            : 'Zip Code must be exactly 5 numbers'
    ],
    state: [
        value => value.length === 2 && value.match(/[a-z]/i)
            ? ''
            : 'State must be 2 letters long.'
    ],
};

const getErrors = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName) => [

        ...acc,
        ...criteria[fieldName].map(test =>
            test(inputs[fieldName])),
    ], []).filter(message => message);
}

console.log(getErrors(currentInputValues, inputCriteria));
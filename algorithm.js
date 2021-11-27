function countingRepeatedLetters(string) {
  // array to store times a letter is repeated
  // example: [3,1,5,10]. Not saving the letter itslef, but only the times it is repeated. And it's not sorted
  let repeatedArray = [];

  // object to store repeated letters
  // {key: letter, value: times repeated}
  let lettersCounter = {};

  // counting number of times a letter is repeated
  // O(n)
  for (let i = 0; i < string.length; i++) {
    // letter to analyze. It's on variable because it's used multiple times
    let letter = string[i];

    // add letter to the obj counter, or increase counter if it was already counted
    // it is O(1) because it is doing an operation of accessing to the object using a unique key
    if (lettersCounter[letter]) {
      lettersCounter[letter]++;
    } else {
      lettersCounter[letter] = 1;
    }
  }

  // get value of each counted letter
  // O(1) because there are max 26 letters in the letters counter
  for (let key in lettersCounter) {
    repeatedArray.push(lettersCounter[key]);
  }

  return repeatedArray;
}


// this implementation is O(n log n)
function maxScore(string) {
  // counting number of times a letter is repeated
  // output is an array with the number of times each letter is repeated (not sorted)
  // example: [3,1,5,10]
  // O(n)
  let repeatedArray = countingRepeatedLetters(string);

  // sort repeating array
  // O(n log n)
  // outpute example: [10,5,3,1]
  repeatedArray.sort((a, b) => b - a);

  // compute value aux variables
  let score = 0;
  let letterValue = 26;

  // compute value
  // O(26) => O(1). Because it is max 26 letters
  for (let i = 0; i < repeatedArray.length; i++) {
    score += repeatedArray[i] * letterValue;
    letterValue--;
  }
  return score;
}
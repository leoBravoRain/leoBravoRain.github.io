// CHALLENGE

// Supón que existe una forma secreta de ordenar las 26 letras del abecedario inglés, y de asignar un valor numérico a cada una dependiendo del lugar en que se encuentre. Siendo 26 las letras del abecedario inglés (A B C D E F G H I J K L M N O P Q R S T U V W X Y Z), el puntaje de cada letra puede ir de 1 a 26.
// En el caso de una palabra, su puntaje es la suma del puntaje de todas sus letras.

// Por ejemplo, si el orden fuera el abecedario al revés, la Z valdría 26 y la A valdría 1. En ese caso, el valor de la palabra "ZA" sería Z(26) + A(1) = 27, y el valor de la palabra "ZAA" sería Z(26) + A(1)+ A(1) = 28.

// Tú no conoces el orden secreto, y por lo tanto, tampoco el puntaje de cada letra. Crea un programa que diga cuál es el máximo valor que podría tener una palabra.

// Ejemplos:
// A = 26
// AB = 51
// YZ = 51
// EEOOO = 128
// EOEOO = 128
// FERROCARRIL = 258

// Toma en cuenta:
// - El sistema puede estar programado en el lenguaje y framework que quieras. Puede ser una aplicación de consola o terminal, una aplicación web, una app de escritorio, o una app móvil.
// - No es necesario que gastes tiempo haciendo que la UI sea bonita (si tuviese UI).
// - Sólo lo probaré con palabras escritas las mayúsculas listadas arriba, sin espacios, números, acentos, ni otros caracteres especiales.

// SOLUTION

// Note: This is the improved version of the first version (below). Now it is O(n). This is the final version I am using.
// count number of times a letter is repeated
// O(n)
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

// Note: This is the final implementation I am using.
// this implementation is O(n log n).
function maxScore(string) {
  // counting number of times a letter is repeated
  // output is an array with the number of times each letter is repeated (not sorted)
  // let repeatedArray = countingRepeatedLetters2(string); // O(n^2)
  let repeatedArray = countingRepeatedLetters(string); // O(n)

  // sort repeating array
  // O(n log n)
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
  // alert(score);
}

// OTHER VERSIONS OF THE ALGORITH AND FUNCTIONS

// Note: This is the first implementation, but it O(n^2). Then I improved it to O(n) on  counteingRepeatedLetters function
// count number of times a letter is repeated
// O(n^2)
function countingRepeatedLetters2(string) {
  let repeatedLetters = [];
  let repeatedArray = [];

  // counting number of times a letter is repeated O(n^2)
  for (let i = 0; i < string.length; i++) {
    // repeating counter for each letter
    let repeated = 1;

    // letter to analyze. It's on variable because it's used multiple times
    let letter = string[i];

    // if letter was already checked, skip it
    if (repeatedLetters.includes(letter)) {
      continue;
    }

    // if letter is not repeated, check if it is repeated in the rest of the string
    for (let j = i + 1; j < string.length; j++) {
      // if letter is repeated, increase counter
      if (letter === string[j]) {
        repeated++;
      }
    }

    // if letter is repeated, add it to the array
    if (repeated > 1) {
      repeatedLetters.push(letter);
    }

    // add number of times letter is repeated to the array
    repeatedArray.push(repeated);
  }

  return repeatedArray;
}

// this implementation is O(n log n). This is same implementation but with fewer lines of code.
// In this implementation it avoids to use repeatedArray. This is O(1) spatial, because it is max 26 letters
function maxScore2(string) {
  // compute value aux variables
  let score = 0;
  let letterValue = 26;

  // steps:
  // 1) counting number of times a letter is repeated
  // O (n)
  // output is an array with the number of times each letter is repeated (not sorted)
  // ouput eaxmple: [3,1,5,10]
  // 2) sort repeating array
  // O(n log n)
  // output example: [10,5,3,1]
  // 3) compute value
  // O(26) => O(1). Because it is max 26 letters
  countingRepeatedLetters(string)
    .sort((a, b) => b - a)
    .forEach((repeatingTimes) => {
      score += repeatingTimes * letterValue;
      letterValue--;
    });

  return score;
}

// this is to export to test the functions
module.exports = maxScore;
// module.exports = maxScore2;

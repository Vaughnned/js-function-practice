(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  let maxNum1 = 5;
  let maxNum2 = 1;
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(max(maxNum1, maxNum2));

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  let num1 = 4;
  let num2 = 8;
  let num3 = 2;
  function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      // ignore num 1 after first if statement
      return num2;
    } else {
      return num3;
    }
  }
  console.log(maxOfThree(num1, num2, num3));
  // maxOfThree(4, 8, 2); would be cleaner;

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  let character = "e";
  let array = ["a", "e", "i", "o", "u"];
  function isVowel(character) {
    if (array.includes(character)) {
      // return [ array ].includes(char);
      return true; // return 'aeiou'.includes(char); these are better options
    } else {
      return false;
    }
  }
  console.log(isVowel(character));
  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(text) {
    let translation = "";
    const textArr = text.split(""); //['h', 'a', 'p', 'p', 'y']
    for (let i = 0; i < textArr.length; i++) {
      const isConsonant = "bcdfghjklmnpqrstvwxyz".includes(textArr[i]);
      if (isConsonant) {
        translation = translation + textArr[i] + "o" + textArr[i];
      } else {
        translation = translation + textArr[i];
      }
    }
    return translation;
  }
  rovarspraket("happy"); // "hohapoppopyoy"
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  const arrayMultiplied = 1;
  const arraySum = 0;
  let numberArray = [2, 4, 6, 3];
  function sum(arraySum) {
    for (i = 0; i < numberArray.length; i++) {
      arraySum += numberArray[i];
    }
    return arraySum;
  }
  console.log(sum(arraySum));

  function multiply(arrayMultiplied) {
    for (i = 0; i < numberArray.length; i++) {
      arrayMultiplied *= numberArray[i];
    }
    return arrayMultiplied;
  }
  console.log(multiply(arrayMultiplied));

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(str) {
    let splitLetters = str.split("");
    let reversedArray = splitLetters.reverse();
    joinArray = reversedArray.join("");
    return joinArray;
  }

  //return str.splt("").reverse().join(""); Much cleaner way to reverse
  reverse("jag testar");

  // Another way of reversing

  // for(let i = str.length - 1; i >= 0; i--;) {
  //  reversedArray += str[i];
  // }
  // return reversedArray;

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  function findLongestWord(words) {
    words = [["long"], ["longer"], ["longest"]];
  }
  console.log(words[2][0].length);

  // For loop is better. Prevents hard coding
  // let length = 0;
  // for (let i = 0; i < arr.length; i++) {
  //  if(arr[i].length < length) {
  //    length = arr[i].length;
  //   }
  // return length
  // }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  function filterLongWords(arr, i) {
    const filteredWordsArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length > i) {
        filteredWordsArr.push(arr[j]);
      }
    }
    return filteredWordsArr;
  }
  // ---------------------

  // My attempt at our CodeWars Problem

  // let joinNum = [];
  // function maxNumber(joinNum) {
  //   let maxArray = [1, 5, 3, 8];

  //   for (i = 0; i < maxArray.length; i++) {
  //     Math.max(maxArray);
  //     maxArrayStr = maxArray.toString();
  //     let splitNum = maxArrayStr.split("");
  //     joinNum = splitNum.join("");
  //     return joinNum;
  //   }
  // }
  // console.log(maxNumber(joinNum));

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {
    // str = books
    const freqList = [];
    const strArr = str.split(""); // ['b', 'o', 'o', 'k', 's']
    for (let i = 0; i < strArr.length; i++) {
      const char = strArr[i]; // simplifies code
      if (freqList[char] !== undefined) {
        freqList[char] += 1;
      } else {
        freqList[char] = 1;
      }
      // freqList[char] += 1 || 1; Cleaner for loop
    }
  }
  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();

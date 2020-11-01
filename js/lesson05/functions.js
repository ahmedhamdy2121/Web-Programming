/* File created by Ahmed Hamdy at 10/31/2020. */
/*
    This file has all the functions' implementation.
*/
// https://www.w3schools.com/js/js_strict.asp
"use strict";

/***************************** START OF MY FUNCTIONS *********************************/

/* 1) takes two numbers as arguments and returns the largest of them */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

/* 2) takes three numbers as arguments and returns the largest of them */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

/* 3) takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise */
function isVowel(c) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(c);
}

/* 4) returns the sums of all the numbers in an array of numbers */
function sum(a) {
    return a.reduce((prev, curr) => prev + curr);
}

/* 4) returns the multiplies of all the numbers in an array of numbers */
function multiply(a) {
    return a.reduce((prev, curr) => prev * curr);
}

/* 5) returns the reversal of a string */
function reverse(str) {
    return str.split('').reverse().join('');
}

/* 6) takes an array of words and returns the length of the longest one */
function findLongestWord(wordArray) {
    return wordArray.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
}

/* 7) takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(wordArray, i) {
    return wordArray.filter(word => word.length > i);
}

/* 8)
    code from https://jsfiddle.net/keithlevi/e6kqvx2f/1/

    Original code:
    =============

    const a = [1,3,5,3,3];
    const b = a.map(function(elem, i, array) {
      return elem + 3;
    })
    console.log(b);
    const c = a.filter(function(elem, i, array){
      return elem !== 3;});
    console.log(c);
    const d = a.reduce(function(prevValue, elem, i, array){
      return prevValue + elem;
    });
    console.log(d);

    const d2 = a.find(function(elem) {return elem > 1;}); //3
    const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    console.log(d2);
    console.log(d3);

    Requirements:
    ============
    a) multiply each element by 10;
	b) return array with all elements equal to 3;
	c) return the product of all elements;
 */
function problem8() {
    const a = [1, 3, 5, 3, 3];
    console.log("Original array: ");
    console.log(a);

    // edit a
    const b = a.map(function(elem) {
        return elem * 10;
    });
    console.log("Multiply each element by 10: ");
    console.log(b);

    // edit b
    const c = a.filter(function(elem) {
        return elem === 3;
    });
    console.log("Return array with all elements equal to 3: ");
    console.log(c);

    // edit c
    const d = a.reduce(function(prev, curr) {
        return prev * curr;
    });
    console.log("Return the product of all elements: ");
    console.log(d);

    const d2 = a.find(function(elem) {return elem > 1;}); //3
    const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    console.log(d2);
    console.log(d3);
}
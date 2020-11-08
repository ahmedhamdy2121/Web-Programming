/* File created by Ahmed Hamdy at 11/08/2020. */
/*
    This file has all the functions' implementation.
*/
// https://www.w3schools.com/js/js_strict.asp
"use strict";

{ // using scope to protect variables from other files

    /* used to check if 2 arrays is equal */
    let arrayEquals = (a, b) => Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, function2test) {
        const output = function2test();
        if (expected === output || arrayEquals(expected, output)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + output;
        }
    }

    /***************************** START OF MY FUNCTIONS *********************************/

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

    /* 7) takes an array of words and an integer i and returns the array of words that are longer than i */
    function filterLongWords(wordArray, i) {
        return wordArray.filter(word => word.length > i);
    }

    // testing
    const prefix = "Expected output of ";

    // 4
    console.log(prefix + "sum([1, 2, 3, 4, 5]) is 15 " + myFunctionTest(15, function () {
        return sum([1, 2, 3, 4, 5]);
    }));
    console.log(prefix + "multiply([1, 2, 3, 4, 5]) is 120 " + myFunctionTest(120, function () {
        return multiply([1, 2, 3, 4, 5]);
    }));

    // 5
    // noinspection SpellCheckingInspection,SpellCheckingInspection
    console.log(prefix + "reverse('yppah') is happy " + myFunctionTest('happy', function () {
        // noinspection SpellCheckingInspection
        return reverse('yppah');
    }));

    // 7
    console.log(prefix + "filterLongWords(['one', 'apple', 'orange', 'two', 'six']) is ['apple', 'orange'] "
        + myFunctionTest(['apple', 'orange'], function () {
            return filterLongWords(['one', 'apple', 'orange', 'two', 'six'], 4);
    }));

    // asserting
    const postfix = " failed the assertion";

    // 4
    console.assert(sum([1, 2, 3, 4, 5]) === 15, "sum" + postfix);
    console.assert(multiply([1, 2, 3, 4, 5]) === 120, "multiply" + postfix);

    // 5
    // noinspection SpellCheckingInspection
    console.assert(reverse('yppah') === 'happy', "reverse" + postfix);

    // 7
    console.assert(arrayEquals(filterLongWords(['one', 'apple', 'orange', 'two', 'six'], 4),
        ['apple', 'orange']), "filterLongWords" + postfix);
}
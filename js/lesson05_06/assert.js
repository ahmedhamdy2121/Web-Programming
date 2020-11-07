/* File created by Ahmed Hamdy at 10/31/2020. */
/*
    This file is created to assert all the functions in functions.js
*/

// https://www.w3schools.com/js/js_strict.asp
"use strict";

/***************** test for all the functions using assert ******************/

{ // using scope to protect variables from other files

    const postfix = " failed the assertion";

    // 1
    console.assert(max(10, 15) === 15, "max" + postfix);

    // 2
    // output to console if failed: functions.js:24 Assertion failed: maxOfThree failed the assertion
    console.assert(maxOfThree(10, 15, 5) === 15, "maxOfThree" + postfix);

    // 3
    console.assert(isVowel('i') === true, "isVowel" + postfix);

    // 4
    console.assert(sum([1, 2, 3, 4, 5]) === 15, "sum" + postfix);
    console.assert(multiply([1, 2, 3, 4, 5]) === 120, "multiply" + postfix);

    // 5
    // noinspection SpellCheckingInspection
    console.assert(reverse('yppah') === 'happy', "reverse" + postfix);

    // 6
    console.assert(findLongestWord(['Ahmed', 'Polymorphism', 'Mohamed'])
        === 'Polymorphism', "findLongestWord" + postfix);

    // 7
    console.assert(arrayEquals(filterLongWords(['one', 'apple', 'orange', 'two', 'six'], 4),
        ['apple', 'orange']), "filterLongWords" + postfix);

}
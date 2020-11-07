/* File created by Ahmed Hamdy at 10/31/2020. */
/*
    This file is created to test all the functions in functions.js
*/

// https://www.w3schools.com/js/js_strict.asp
"use strict";

/* public function: used to check if 2 arrays is equal */
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

{ // using scope to protect variables from other files

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, function2test) {
        const output = function2test();
        if (expected === output || arrayEquals(expected, output)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + output;
        }
    }

    /************** test for all the functions using myFunctionTest **************/

    const prefix = "Expected output of ";

    // 1
    console.log(prefix + "max(20, 10) is 20 " + myFunctionTest(20, function () {
        return max(20, 10);
    }));

    // 2
    console.log(prefix + "maxOfThree(5, 3, 10) is 10  " + myFunctionTest(10, function () {
        return maxOfThree(5, 3, 10);
    }));

    // 3
    console.log(prefix + "isVowel('i') is true " + myFunctionTest(true, function () {
        return isVowel('i');
    }));
    console.log(prefix + "isVowel('x') is false " + myFunctionTest(false, function () {
        return isVowel('x');
    }));

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

    // 6
    console.log(prefix + "findLongestWord(['Ahmed', 'Polymorphism', 'Mohamed']) is Polymorphism "
        + myFunctionTest('Polymorphism', function() {
            return findLongestWord(['Ahmed', 'Polymorphism', 'Mohamed']);
    }));

    // 7
    console.log(prefix + "filterLongWords(['one', 'apple', 'orange', 'two', 'six']) is ['apple', 'orange'] "
        + myFunctionTest(['apple', 'orange'], function () {
                return filterLongWords(['one', 'apple', 'orange', 'two', 'six'], 4);
    }));

    // 8
    console.log("Output of problem 8: ");
    problem8();

}
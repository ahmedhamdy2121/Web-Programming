/* File created by Ahmed Hamdy at 11/06/2020. */
/*
    This file is created to test all the problems in lab.js
*/

// https://www.w3schools.com/js/js_strict.asp
"use strict";

{ // using scope to protect variables from other files

    /* used to check if 2 arrays is equal */
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

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
    console.log(prefix + "'This house is not nice!'.filter('not') is 'This house is nice!' "
        + myFunctionTest('This house is nice!', function() {
            return 'This house is not nice!'.filter('not');
        }));

    console.log(prefix + "'This house is not nice!'.filter(['not', 'is']) is 'This house nice!' "
        + myFunctionTest('This house nice!', function() {
            return 'This house is not nice!'.filter(['not', 'is']);
        }));

    // 2
    console.log(prefix + "[6, 4, 0, 3, -2, 1].bubbleSort() is [-2, 0, 1, 3, 4, 6] "
        + myFunctionTest([-2, 0, 1, 3, 4, 6], function() {
            return [6, 4, 0, 3, -2, 1].bubbleSort();
        }));

    // 3
    const teacherOb1 = new Teacher('Ahmed');
    teacherOb1.teach('OOP');

}
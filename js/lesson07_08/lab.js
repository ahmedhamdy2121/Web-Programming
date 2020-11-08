/* File created by Ahmed Hamdy at 11/06/2020. */
/*
    This file has all the functions' implementation.
*/
// https://www.w3schools.com/js/js_strict.asp
"use strict";

/***************************** START OF MY LAB *********************************/

// Exercise 1: define function filter on String object
// References: https://stackoverflow.com/questions/49655135/javascript-regex-remove-multiple-words-from-string

/**
 * this function takes a list of strings and filters the called String
 * so the output is the called string but without any of the words in the input list. <br />
 *
 * <b>this</b>: a String <br />
 * <b>Input</b>: List of Strings or a single string <br />
 * <b>Output</b>: called String without any of the words in the input
 */
String.prototype.filter = function(filterWords) {
    let expStr = Array.isArray(filterWords)? filterWords.join('|'): filterWords;
    let rgx = new RegExp('\\b(' + expStr + ')\\b', 'gi');
    return this.replace(rgx, ' ').replace(/\s{2,}/g, ' ');
};

// Exercise 2: write a BubbleSort algorithm on the Array object

/**
 * this function is called on an array, then it sorts it Asc <br />
 *
 * <b>this</b>: an array <br />
 * <b>Input</b>: - <br />
 * <b>Output</b>: the sorted array (Asc)
 */
Array.prototype.bubbleSort = function() {
    let len = this.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (this[i] > this[i + 1]) {
                let tmp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return this.valueOf();
};

// Exercise 3:
    // Person object has property name
    // Teacher extends from Person
    // Teacher has method teach that receives a parameter subject

// using function constructor
console.log('******************** Solutions for Exercise 3 using Constructor *******************');

// parent
const Person = function(name) {
    this.name = name;
}

// child
const Teacher = function(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.teach = function(subject) {
    console.log(this.name + ' is now teaching ' + subject);
}

// testing
const teacherOb1 = new Teacher('Ahmed');
teacherOb1.teach('OOP');

// using Object.create
console.log('******************** Solutions for Exercise 3 using Object.create *******************');

{
    // parent
    const Person = {
        name: ''
    }

    // child
    const Teacher = Object.create(Person);

    Teacher.teach = function (subject) {
        console.log(this.name + ' is now teaching ' + subject);
    }

    // testing
    const teacherOb2 = Object.create(Teacher);
    teacherOb2.name = 'Ahmed';
    teacherOb2.teach('DS');

    const makeTeacher = function(name) {
        let t = Object.create(Teacher);
        t.name = name;
        return t;
    }

    const t = makeTeacher('Ahmed');
    t.teach('DP');
}

// Exercise 4:
console.log('******************** Solutions for Exercise 4 using Constructor *******************');

{
    // parent
    const Person = function(name, age) {
        this.name = name;
        this.age = age;
    }

    // noinspection JSUnusedGlobalSymbols
    Person.prototype.greeting = function() {
        console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }

    Person.prototype.salute = function() {
        console.log('Good morning!, and in case I dont see you, ' +
            'good afternoon, good evening and good night!');
    }

    // child
    const Student = function (name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }

    Student.prototype = Object.create(Person.prototype);

    Student.prototype.greeting = function() {
        console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major + ".");
    }

    const Professor = function (name, age, department) {
        Person.call(this, name, age);
        this.department = department;
    }

    Professor.prototype = Object.create(Person.prototype);

    Professor.prototype.greeting = function() {
        console.log('Good day, my name is ' + this.name
            + ' and I am in the ' + this.department + ' department.');
    }

    // test
    const s = new Student('Mohamed', 25, 'Math');
    s.salute();
    s.greeting();
    const p = new Professor('Ahmed', 29, 'CS');
    p.salute();
    p.greeting();
}

console.log('******************** Solutions for Exercise 4 using Object.create *******************');

{
    // parent
    const Person = {
        name: '',
        age: 0,
        greeting: function() {
            console.log('Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
        },
        salute: function() {
            console.log('Good morning!, and in case I dont see you, ' +
                'good afternoon, good evening and good night!');
        }
    }

    // child
    const Student = Object.create(Person);

    Student.major = '';

    Student.greeting = function() {
        console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major + ".");
    }

    const makeStudent = function (name, age, major) {
        let s = Object.create(Student);

        s.name = name;
        s.age = age;
        s.major = major;

        return s;
    };

    const Professor = Object.create(Person);

    Professor.department = '';

    Professor.greeting = function() {
        console.log('Good day, my name is ' + this.name
            + ' and I am in the ' + this.department + ' department.');
    }

    const makeProfessor = function (name, age, department) {
        let p = Object.create(Professor);

        p.name = name;
        p.age = age;
        p.department = department;

        return p;
    };

    // test
    const s = makeStudent('Mohamed', 25, 'Math');
    s.salute();
    s.greeting();
    const p = makeProfessor('Ahmed', 29, 'CS');
    p.salute();
    p.greeting();
}

// encapsulation with modules
// References: https://stackoverflow.com/questions/9878128/module-pattern-with-constructor
// References: https://css-tricks.com/implementing-private-variables-in-javascript/
console.log('******************** Solutions for Exercise 4 using modules *******************');

{
    const Person = (function() {

        // private instance variables
        function Person(name, age) {
            // noinspection JSUnusedGlobalSymbols
            this.getName = function() {
                return name;
            };
            // noinspection JSUnusedGlobalSymbols
            this.setName = function(newName) {
                 name = newName;
            };
            // noinspection JSUnusedGlobalSymbols
            this.getAge = function() {
                return age;
            };
            // noinspection JSUnusedGlobalSymbols
            this.setAge = function(newAge) {
                age = newAge;
            };
        }

        // noinspection JSUnusedGlobalSymbols
        Person.prototype.greeting = function() {
            console.log('Greetings, my name is ' + this.getName()
                + ' and I am ' + this.getAge() + ' years old.');
        }

        Person.prototype.salute = function() {
            console.log('Good morning!, and in case I dont see you, ' +
                'good afternoon, good evening and good night!');
        }

        return Person;

    })();

    const Student = (function() {

        function Student(name, age, major) {
            Person.call(this, name, age);
            // noinspection JSUnusedGlobalSymbols
            this.getMajor = function() {
                return major;
            };
            // noinspection JSUnusedGlobalSymbols
            this.setMajor = function(newMajor) {
                major = newMajor;
            };
        }

        Student.prototype = Object.create(Person.prototype);

        Student.prototype.greeting = function() {
            console.log('Hey, my name is ' + this.getName()
                + ' and I am studying ' + this.getMajor() + ".");
        }

        return Student;

    })();
    
    const Professor = (function() {
        
        function Professor(name, age, department) {
            Person.call(this, name, age);
            // noinspection JSUnusedGlobalSymbols
            this.getDepartment = function() {
                return department;
            };
            // noinspection JSUnusedGlobalSymbols
            this.setDepartment = function(newDepartment) {
                department = newDepartment;
            };
        }

        Professor.prototype = Object.create(Person.prototype);

        Professor.prototype.greeting = function() {
            console.log('Good day, my name is ' + this.getName()
                + ' and I am in the ' + this.getDepartment() + ' department.');
        }

        return Professor;
        
    })();

    // test
    const s = new Student('Mohamed', 25, 'Math');
    s.salute();
    s.greeting();
    const p = new Professor('Ahmed', 29, 'CS');
    p.salute();
    p.greeting();
    const p2 = new Professor('Maggie', 35, 'Physics');
    p2.salute();
    p2.greeting();
    console.log('>>> ' + p.getName());
    console.log('>>> ' + p2.getName());

    // test 2
    let per = new Person('Ahmed', 29);
    console.log('>>>> ' + per.getName()); // undefined if p.name
    per.setName('Mohamed');
    console.log('>>>> ' + per.getName());
}
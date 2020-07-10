// Partial Application Programming
// utilizing one function as an argument, whose variable will typically be the same, inside of another function
const ADD = (x,y,z) => (x + y + z); // the main function to be solved

const addPARTIAL = x => 
    (y,z) => ADD(x,y,z); // takes the variable provided as an argument and

const add5 = addPARTIAL(5); // the known static variable is created and passed to the preceeding function
const SUM = add5(6,7); // we add the 2 unknown arguments to our new variable, which is passed to the originally created master function

// this lets us create multiple partial applications to be reused to determine the final function results.
// imagine having an add(5), add(10), and add(100) partial variables mapped to buttons to increment with the 2 provided arguments that are given by the user
console.log(SUM);

//below is another example of the same result function, where each argument is passed individually by the previous functions

const addPartial2 = x =>
    y =>
        z => ADD(x,y,z);

const add10 = addPartial2(10);
const addXY = add10(20);
const sum2 = addXY(5);

console.log(sum2);

// the three consts in sum2 created above can actually be removed
// and the arguments passed directly to the function like the example below

const sum3 = addPartial2(90)(6)(4);

console.log(sum3);
// this is an example of 'currying'
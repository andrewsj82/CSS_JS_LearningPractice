// Recursive Function Example
// recursive functions are functions that call themselves within the function, and can lead to infinite loops, if not implemented correctly.
// recursive functions MUST have a stop command, to prevent the loop running infinitely

//  const recursiveFunction = () => {
//     .... do the things...
//     recursiveFunction();
//  }

const countDown = x => {
    if (x < 0) return;
    console.log(x);
    countDown(x - 1);
}
countDown(10);

// below is counting up. this function takes two arguments, instead of one.
const countUp = (y, max) => {
    if (y > max) return;
    console.log(y);
    countUp(y + 1, max);
}
countUp(3, 10);
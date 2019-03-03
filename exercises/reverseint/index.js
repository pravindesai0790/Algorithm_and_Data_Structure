// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversedNum =  n.toString()
                          .split('')
                          .reverse()
                          .join('');
                          
    return parseInt(reversedNum) * Math.sign(n);
}

//reverseInt(234);

module.exports = reverseInt;

// function reverseInt(n) {
//     var reverse = parseInt(n.toString().split('').reverse().join(''));

//     if(n < 0)
//         return reverse * -1;

//     return reverse;
// }

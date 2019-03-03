// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using for loop
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;
}

reverse('abdc');

module.exports = reverse;

// using inbuilt function
// function reverse(str) {
//     return str
//             .split('')
//             .reverse()
//             .join('');
// }

// using for loop
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

// using array helpers 'reduce'
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');
// }
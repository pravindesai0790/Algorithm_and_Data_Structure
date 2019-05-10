// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // console.log(chars);
    // let arr = Object.keys(chars);
    // let min = Math.min(...arr);
    // let max = Math.max(...arr);
    // console.log(arr);
    // console.log(`Min value: ${min}, max value: ${max}`);

    for (let key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }
    }

    //console.log('Key: ' + maxChar + ' Value: ' + max);
    return maxChar;
}

//console.log(maxChar("abcccccccd"));

module.exports = maxChar;
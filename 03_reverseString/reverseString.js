const reverseString = function(stringToReverse) {
    let splitString = stringToReverse.split("");

    let reversedArray = splitString.reverse();

    let joinArray = reversedArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;

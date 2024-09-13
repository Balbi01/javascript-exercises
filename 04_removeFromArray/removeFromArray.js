const removeFromArray = function(array, elementToRemove) {
    let newArray = [];

    console.log(elementToRemove);

    array.forEach(element => {

        if (element != elementToRemove) {
            newArray.push(element);
        }

    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

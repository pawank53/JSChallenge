const numberGenerator = (a, b) => {
    let arr = [];
    const generateNumbers = (start, end) => {
        if (start > end) {
            return arr;
        }
        arr.push(start);
        return generateNumbers(start + 1, end);
    };
    if (a <= b) {
        generateNumbers(a, b);
    }

    return arr;
};
console.log(numberGenerator(1, 5));  // Output: [1, 2, 3, 4, 5]
console.log(numberGenerator(3, 7));  // Output: [3, 4, 5, 6, 7]
console.log(numberGenerator(-2, 2)); // Output: [-2, -1, 0, 1, 2]

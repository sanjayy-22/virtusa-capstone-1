let numbers = [10, 5, 8, 3, 15, 3];

let uniqueNumbers = [...new Set(numbers)];

uniqueNumbers.sort((a, b) => a - b);

if (uniqueNumbers.length < 2) {
    console.log("Second-smallest element does not exist.");
} else {
    console.log("Second-smallest element:", uniqueNumbers[1]);
}

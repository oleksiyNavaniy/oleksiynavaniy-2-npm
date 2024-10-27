// Helper function to convert RGB color to hex
function rgbToHex(r, g, b) {
    return (
        '#' +
        [r, g, b]
            .map(color => color.toString(16).padStart(2, '0'))
            .join('')
            .toUpperCase()
    );
}

// Helper function to get unique values from an array
function getUniqueValues(arr) {
    return [...new Set(arr)];
}

// Helper function to capitalize each word in a sentence
function capitalizeSentence(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Helper function to check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Helper function to get the file extension from a filename
function getFileExtension(filename) {
    const parts = filename.split('.');
    return parts.length > 1 ? parts.pop() : '';
}

// Example usage
console.log("RGB to Hex:", rgbToHex(255, 99, 71));                   // "#FF6347" (Tomato color)
console.log("Unique Values:", getUniqueValues([1, 2, 2, 3, 4, 4]));  // [1, 2, 3, 4]
console.log("Capitalized Sentence:", capitalizeSentence("hello world! welcome to js.")); // "Hello World! Welcome To Js."
console.log("Is 2024 a Leap Year?", isLeapYear(2024));               // true
console.log("File Extension:", getFileExtension("photo.png"));       // "png"

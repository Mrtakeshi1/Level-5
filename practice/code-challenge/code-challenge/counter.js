export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


// Code Challenge 1 //

// Function to extract unique characters from an array of words
function extractUniqueCharacters(words) {
  // Set to store unique characters
  const uniqueChars = new Set();
  
  // Loop through each word in the array
  words.forEach(word => {
    // Split the word into individual characters and iterate over them
    word.split('').forEach(char => uniqueChars.add(char));
  });
  
  // Convert the Set to an array and return
  return Array.from(uniqueChars);
}

// Usage example
const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']


// Code Challenge 2 //

// Function to sort an array of objects by a specified property
function sortByProperty(objects, propertyName) {
  // Make a copy of the original array and sort it based on the specified property
  return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
}

// Example usage
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

// Sort the array of people by age
const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);



//Challenge: Write a program that generates a multiplication table for a given number.

//The table should display the multiplication of the given number with numbers from 1 to 10.

function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`)
}
}
// Test the function with different numbers
generateMultiplicationTable(5);
// Expected Outcome: 
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
generateMultiplicationTable(7);
generateMultiplicationTable(3);
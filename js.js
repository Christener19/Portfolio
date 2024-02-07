import { readFileSync } from 'fs';

function decode(message_file) {
  try {
    // Read the content of the file
    const fileContent = readFileSync(message_file, 'utf-8');
    
    // Split the content into lines
    const lines = fileContent.split('\n');
    
    // Initialize an empty array to store the decoded words
    const decodedWords = [];

    // Loop through each line in the file
    for (let i = 0; i < lines.length; i++) {
      // Split each line into two parts: a number and a word
      const parts = lines[i].split(' ');
      
      // Convert the number part to a whole number
      const lineNumber = parseInt(parts[0]);

      // Check if the number matches the line number we expect
      if (lineNumber === i + 1) {
        // If it matches, add the word to the decoded array
        decodedWords.push(parts[1]);
      }
    }

    // Join the decoded words into a single string and return it
    return decodedWords.join(' ');
  } catch (error) {
    // Handle any errors that may occur (e.g., file not found)
    return 'Error: ' + error.message;
  }
}

// Example usage:
const decodedMessage = decode('encoded_message.txt');
console.log(decodedMessage);

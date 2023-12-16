const fs = require('fs');



const inputFile = "/Users/meghasilori/Documents/100xdevs-Programs/assignment1/assignments/week-2/01-async-js/medium/content.txt";

// Read the file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    // Remove extra spaces
    const cleanedContent = data.replace(/\s+/g, ' ');
  
    // Write back to the same file
    fs.writeFile(inputFile, cleanedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
  
      console.log('File cleaned successfully!');
    });
});

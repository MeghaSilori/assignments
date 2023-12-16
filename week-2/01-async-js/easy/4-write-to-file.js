const fs = require('fs');
function callfileWriteroperation(){

    let dataToWrite ="Line 1: Lorem ipsum dolor sit amet, \n Line 2: consectetur adipiscing elit."
    dataToWrite += "Line 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    dataToWrite += "Line 4: Ut enim ad minim veniam, "
    dataToWrite += "Line 5: quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    dataToWrite += 'Hello, this is the content to be written to the file.';

    // Specify the file path and name
    const filePath = '/Users/meghasilori/Documents/100xdevs-Programs/assignment1/assignments/week-2/01-async-js/easy/a.txt';

    // Use fs.writeFile to write data to the file asynchronously
    fs.writeFile(filePath, dataToWrite, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data has been written to', filePath);
        }
        
    });

    let count = 0;
    for(let i=0; i<9000;  i++){
        count += Math.sqrt(i);
    }
    console.log(count);
}

callfileWriteroperation()

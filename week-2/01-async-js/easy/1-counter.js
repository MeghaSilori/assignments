// Start counting from 0
let count = 0;

// Function to increment the counter
function incrementCounter() {
    count++;
    console.log('Counter:', count);
}

// Call the function every 1 second
setInterval(incrementCounter, 1000);
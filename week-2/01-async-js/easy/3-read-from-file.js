// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')
function callfileReaderoperation(){
    fs.readFile('/Users/meghasilori/Documents/100xdevs-Programs/assignment1/assignments/week-2/01-async-js/easy/a.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            let arr=data.split('\n');
            for(let i=0;i<arr.length;i++){
                setTimeout(()=>console.log(`Line ${i+1}: ${arr[i]}`),500*i)
            }
        }
    });  
    let count = 0;
    for(let i=0; i<9000;  i++){
        count += Math.sqrt(i);
    }
    console.log(count);
}



callfileReaderoperation()

// Start counting from 0
var count = 0;

function counter(count){
    console.log("Counter: " + count);
    setTimeout(() =>{
        counter(count+1)
    }, 1000);
}
counter(1);
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Functions that returns promises resolving after specific amount of time (in seconds)

function wait1(t) {
    return  new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, t);
    });
}

function wait2(t) {
    return  new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, t);
    });
}

function wait3(t) {
    return  new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, t);
    });
}

function cal (t1, t2, t3){
    let start = Date.now() ;
    // Use Promise.all to make sure all three are resolved before proceeding
    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).
        then(()=>{
            const end = Date.now();
            return  end-start;
        })
}
function calculateTime(t1, t2, t3) {
    return cal(t1,t2,t3);
}

module.exports = calculateTime;

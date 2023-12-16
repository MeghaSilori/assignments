let time = new Date();

function counter(time){
    console.log("Time: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    setTimeout(() =>{
        let nextTime = new Date()
        counter(nextTime);
    }, 1000);
}


counter(time);
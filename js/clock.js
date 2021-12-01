function setTime(){
    const CLOCK = document.querySelector("h2#clock");
    const date = new Date;
    
    let presentTime = String(date.getHours()).padStart(2,"0") + ' : ' 
                    + String(date.getMinutes()).padStart(2,"0") + ' : ' 
                    + String(date.getSeconds()).padStart(2,"0");
    CLOCK.innerText = presentTime;
    console.log(date.getHours);
}

setInterval(setTime,1000)

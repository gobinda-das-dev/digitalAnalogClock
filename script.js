let sc = document.querySelector("#sec");
let mn = document.querySelector("#min");
let hr = document.querySelector("#hrs");


setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    let miliSecond = day.getMilliseconds()/1000 * 360;
    
    
    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    document.getElementById("hour").style.transform = `rotateZ(${(hh + (mm/12)) + 180 + miliSecond}deg)`;
    document.getElementById("minute").style.transform = `rotateZ(${mm + 180 + miliSecond}deg)`;
    document.getElementById("second").style.transform = `rotateZ(${ss + 180 + miliSecond}deg)`;

    document.querySelector("#circle").style.transform = `rotate(${-miliSecond}deg)`;
})


// Digital Analog Clock
setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    var am = h >= 12 ? "PM" : "AM";

    //Convert 24hr clock to 12hr clock
    if(h > 12){
        h-= 12;
    }

    // Add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});














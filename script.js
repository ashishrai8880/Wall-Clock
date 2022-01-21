console.log("Runnign");

setInterval(() => {
    
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hRotate = 30 * h + m/2;
    let mRotate = 6 * m ;
    let sRotate = 6 * s ;

    document.getElementById('hour').style.transform = `rotate(${hRotate}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mRotate}deg)`;
    document.getElementById('second').style.transform = `rotate(${sRotate}deg)`;
}, 1000);
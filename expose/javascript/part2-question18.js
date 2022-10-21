function callback() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
};

setInterval(callback, 1000);

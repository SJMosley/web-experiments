function moveHands(){
        //Tutorial said use the with statement I am voting no since the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
        //says that it isn't recommended

        //init variables (I know I could hardcode this super easy, but I won't)
        let currentTime = new Date();
        let hours = 12;
        let minutes = 60;
        let seconds = 60;
        let hourSpeed = 360/hours;
        let minSecSpeed = 360/minutes;
        h = hourSpeed * (currentTime.getHours()%hours + currentTime.getMinutes()/minutes);
        m = minSecSpeed * currentTime.getMinutes();
        s = minSecSpeed * currentTime.getSeconds();

        //set rotation of hand elements
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

    setTimeout(moveHands, 1000); //call every second
}

window.onload = moveHands; //call after load
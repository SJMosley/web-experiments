//generate color
function getColor(){
    let color = '#' + Math.random().toString(16).slice(2,8);
    //console.log(color);
    return color;
}
//set the background
function setBackground(){
    let bgColor = getColor();
    document.body.style.background = bgColor;
    document.getElementById('colorDisplay').innerHTML = bgColor;
}

//get key press
document.body.onkeyup = (e) => {
    if(e.keyCode == 32){//space bar
        setBackground();
    }
}

setBackground();
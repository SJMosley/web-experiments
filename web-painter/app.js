let canvas = document.getElementById('draw');
let ctx = canvas.getContext('2d');
let pos = {x:0,y:0};
let saveInterval = 5000;
resize();
loadCanvas();

function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function draw(e){
    if(e.buttons!==1) return; //mouse not pressed
    
    let color = document.getElementById('hex').value;
    
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    
    ctx.stroke();
}

function setPosition(e){
    pos.x = e.clientX;
    pos.y = e.clientY;
}

//https://stackoverflow.com/questions/20507534/how-to-save-and-load-html5-canvas-to-from-localstorage
function saveCanvas(){
    localStorage.setItem("sjmosley-web-painter", canvas.toDataURL());
}

function loadCanvas(){
    let dataUrl = localStorage.getItem("sjmosley-web-painter");
    let img = new Image;
    img.src = dataUrl;
    img.onload = function(){
        ctx.drawImage(img, 0, 0);
    };
    setInterval(saveCanvas, saveInterval); //save every five seconds
}

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);
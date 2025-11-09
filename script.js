//player
var player = document.querySelector(".player");
var playerimg = document.querySelector(".playerimg");

var ground = window.innerHeight;
var wall = window.innerWidth;

//x and y positions
var playhit = player.getBoundingClientRect();
var ypos = playhit.top;
var xpos = playhit.left;
var ybottom = playhit.bottom;
var xright = playhit.right;
playerheight = playhit.height;
playerwidth = playhit.width;

//game variables

var gravity = 1;
var speed = 5;
var jumpvelocity = -20;
var yvelocity = 0;
var jumpsleft = 2;
var grounded = false;
var dashing = false;

//key states

var keys = {
    right: false,
    left: false,
    space: false,
    dashdown: false
};

//control keys
const controls = {
  right: ["ArrowRight", "KeyD"],
  left: ["ArrowLeft", "KeyA"],
  jump: ["Space", "KeyW", "ArrowUp"],
  dashdown: ["KeyX"]
};


//key detection
window.addEventListener("keydown", (e) => {
    if (controls.right.includes(e.code)) keys.right = true;
    if (controls.left.includes(e.code)) keys.left = true;
    if (controls.jump.includes(e.code) && jumpsleft > 0) keys.space = true;
    if (controls.dashdown.includes(e.code)) {    
        if (jumpsleft > 0) {
        yvelocity = jumpvelocity;
        jumpsleft--;
        playerimg.src = "greenbeanboom.png"}
    }
});

window.addEventListener("keyup", (e) => {
    if (controls.right.includes(e.code)) keys.right = false;
    if (controls.left.includes(e.code)) keys.left = false;
    if (controls.jump.includes(e.code)) {playerimg.src = "greenbean.png"; keys.space = false;}
    if (controls.dashdown.includes(e.code)) {keys.dashdown = false; dashing = false; gravity = 1; speed = 5;}
});


function gameLoop() {

        //update hitbox

    playhit = player.getBoundingClientRect();

    //gravity

    yvelocity += gravity;
    ypos += yvelocity;

    //ground detection

    if (ypos + playerheight >= ground) {
        ypos = ground - playerheight;
        yvelocity = 0;
        jumpsleft = 2;
        dashing = false;
        speed = 5;
        gravity = 1
        grounded = true;
    }
    else {
        grounded = false;
    }

    //movement
    if (dashing == false){
        if (keys.right == true && xpos + playerwidth < wall) {
            xpos += speed;
        }
        if (keys.left == true && xpos > 0) {
            xpos -= speed;
        }
    }

    }
    if (keys.dashdown == true && grounded == false && dashing == false) {
        dashing = true;
        yvelocity = 35;
        gravity = 0;
        speed = 0;
    }


    //update player position
    player.style.top = ypos + "px";
    player.style.left = xpos + "px";

    //loop the game

    requestAnimationFrame(gameLoop);
}
gameLoop();

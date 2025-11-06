//player
var player = document.querySelector(".player");
var playerimg = document.querySelector(".playerimg");

var ground = window.innerHeight;
var wall = window.innerWidth;

//x and y positions
var playhit = player.getBoundingClientRect();
var ypos = playhit.top;
var xpos = playhit.left;
playerheight = playhit.height;
playerwidth = playhit.width;

//game variables

var gravity = 5;
var speed = 5;
var jumpvelocity = -20;
var yvelocity = 0;
var jumpsleft = 2;
var grounded = false;

var keys = {
    right: false,
    left: false,
    space: false
};

//key detection
window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") keys.right = true;
    if (e.code === "ArrowLeft") keys.left = true;
    if (e.code === "Space" && jumpsleft > 0) {
        yvelocity = jumpvelocity;
        jumpsleft--;
        playerimg.src = "greenbeanboom.png"
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") keys.right = false;
    if (e.code === "ArrowLeft") keys.left = false;
    if (e.code === "Space") {
        playerimg.src = "greenbean.png"
    }
});


function gameLoop() {

    playhit = player.getBoundingClientRect();


    var ybottom = playhit.bottom;
    var xright = playhit.right;

    //gravity
    yvelocity += gravity;
    ypos += yvelocity;

    if (ypos + playerheight >= ground) {
        ypos = ground - playerheight;
        yvelocity = 0;
        jumpsleft = 2;
        grounded = true;
    }
    else {
        grounded = false;
    }

    //movement
    if (keys.right == true && xpos + playerwidth < wall) {
        xpos += speed;
    }
    if (keys.left == true && xpos > 0) {
        xpos -= speed;
    }

    //update player position
    player.style.top = ypos + "px";
    player.style.left = xpos + "px";

    requestAnimationFrame(gameLoop);
}
gameLoop();

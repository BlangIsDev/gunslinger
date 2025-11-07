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

var keys = {
    right: false,
    left: false,
    space: false
};

//key detection
window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight" || e.code === "d") keys.right = true;
    if (e.code === "ArrowLeft" || e.code === "a") keys.left = true;
    if (e.code === "Space" && jumpsleft > 0 || e.code === "w" && jumpsleft > 0) {
        yvelocity = jumpvelocity;
        jumpsleft--;
        playerimg.src = "greenbeanboom.png"
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight" || e.code === "d" || e.code === "D") keys.right = false;
    if (e.code === "ArrowLeft" || e.code === "a" || e.code === "A") keys.left = false;
    if (e.code === "Space" || e.code === "w" || e.code === "W" || e.code === "ArrowUp") {
        playerimg.src = "greenbean.png"
    }
});


function gameLoop() {

    playhit = player.getBoundingClientRect();

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

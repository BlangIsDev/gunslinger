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
var jumpheight = 100;
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
        ypos -= jumpheight;
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
    if (ypos + playerheight < ground) {
        ypos += gravity;
        grounded = false;
    }
    else {
        ypos = ground - playerheight;
        jumpsleft = 2;
        grounded = true;
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

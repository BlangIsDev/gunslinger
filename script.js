//player
var player = document.querySelector(".player");

var ground = window.innerHeight;
var wall = window.innerWidth;

//x and y positions
var playhit = player.getBoundingClientRect();
var ypos = playhit.top;
var xpos = playhit.left;

var gravity = 5;
var speed = 5;
var jumpheight = 50;
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
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") keys.right = false;
    if (e.code === "ArrowLeft") keys.left = false;
});


function gameLoop() {

    playhit = player.getBoundingClientRect();


    var ybottom = playhit.bottom;
    var xright = playhit.right;

    //gravity
    if (ypos < ground) {
        ypos += gravity;
        grounded = false;
    }
    else {
        jumpsleft = 2;
        grounded = true;
    }

    //movement
    if (keys.right == true && xpos < wall) {
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

//player
var player = document.querySelector(".player");

//x and y positions
var playhit = player.getBoundingClientRect();

var ypos = playhit.top;
var xpos = playhit.left;
var ybottom = playhit.bottom;
var xright = playhit.right;

var grounded;


    function gameLoop() {

        //gravity
        if(ybottom >= 0){
            ypos + 1;
        }
        requestAnimationFrame(gameLoop);
}
    gameLoop();

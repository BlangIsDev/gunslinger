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
        if(ybottom < 0){
            ypos + 1;
            grounded = true;
        }
        else{
            ypos - 1;
            grounded = false;
        }

        //update player position
        player.style.top = ypos + "px";
        player.style.left = xpos + "px";
        
        requestAnimationFrame(gameLoop);
}
    gameLoop();

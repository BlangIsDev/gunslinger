//player
var player = document.querySelector(".player");

ground = window.innerHeight;
gravity = 5;

var grounded = false;


    function gameLoop() {

        //x and y positions
        var playhit = player.getBoundingClientRect();

        var ypos = playhit.top;
        var xpos = playhit.left;
        var ybottom = playhit.bottom;
        var xright = playhit.right;

        //gravity
        if(ybottom < ground){
            ypos += 1;
            grounded = false;
        }
        else{
            
            grounded = true;
        }

        //update player position
        player.style.top = ypos + "px";
        player.style.left = xpos + "px";
        
        requestAnimationFrame(gameLoop);
}
    gameLoop();

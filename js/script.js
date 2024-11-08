window.onload = function () {

    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const soundButton = document.getElementById("sound-button");


    let myGame;
    let sound = true;

    startButton.addEventListener("click", function () {
      startGame();
    });


    restartButton.addEventListener("click", () => {
      window.location.reload();
    });


    document.addEventListener("keydown", (event) => {
      
      if (event.code === "ArrowRight") {
        myGame.player.directionX = 0.23;
      }
      if (event.code === "ArrowLeft") {
        myGame.player.directionX = -0.23;
      }
      if (event.code === "ArrowUp") {
        myGame.player.directionY = -0.23;
      }
      if (event.code === "ArrowDown") {
        myGame.player.directionY = 0.23;
      }
    });

    
    document.addEventListener("keyup", () => {
      myGame.player.directionX = 0;
      myGame.player.directionY = 0;
    });


    document.addEventListener("keypress", (event)=>{
      if (event.code === "Space"){
        const bombLeft = myGame.player.left + 1;
        const bombTop = myGame.player.top + 2 ;
        myGame.bombs.push(new bomb(bombLeft,bombTop)) ;    
      }

    });


     soundButton.addEventListener("click", () => {
      if (sound){
        myGame.backgroundSound.pause();
        soundButton.style.backgroundImage="url(images/unmute.png)";
        sound = false;
      }else{
        myGame.backgroundSound.play();
        soundButton.style.backgroundImage = "url(images/mute.png)";
        sound = true;
      }
      
      });

    function startGame() {
      myGame = new Game();
      myGame.start();
    }
  };
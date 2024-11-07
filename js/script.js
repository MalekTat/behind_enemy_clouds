window.onload = function () {

    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    
    let myGame;
    startButton.addEventListener("click", function () {
      startGame();
    });

    restartButton.addEventListener("click", () => {
      window.location.reload();
    });

    document.addEventListener("keydown", (event) => {
      
      if (event.code === "ArrowRight") {
        myGame.player.directionX = 0.09;
      }
      if (event.code === "ArrowLeft") {
        myGame.player.directionX = -0.09;
      }
      if (event.code === "ArrowUp") {
        myGame.player.directionY = -0.09;
      }
      if (event.code === "ArrowDown") {
        myGame.player.directionY = 0.09;
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

    function startGame() {
      myGame = new Game();
      myGame.start();
    }
  };
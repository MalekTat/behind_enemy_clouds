window.onload = function () {
    let myGame;
    //startGame()
    myGame = new Game();
    myGame.start();

    document.addEventListener("keydown", (event) => {
      
      if (event.code === "ArrowRight") {
        myGame.player.directionX = 2;
      }
      if (event.code === "ArrowLeft") {
        myGame.player.directionX = -2;
      }
      if (event.code === "ArrowUp") {
        myGame.player.directionY = -2;
      }
      if (event.code === "ArrowDown") {
        myGame.player.directionY = 2;
      }
    });

    
    document.addEventListener("keyup", () => {
      myGame.player.directionX = 0;
      myGame.player.directionY = 0;
    });

    function startGame() {
      myGame = new Game();
      myGame.start();
    }
  };
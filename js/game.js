class Game {
    constructor() {
      this.gameScreen = document.getElementById("game-screen");
      this.player = new Player(30, 50);
      this.gameIntervalId = null;
      this.gameLoopFrequency = Math.round(1000 / 60);
      this.frames = 0;
    }

    start() {  
     
        this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }

    gameLoop() {
      this.frames++;
      this.update();
  
    }

    update() {
      //this calls the move method from the Player class
      this.player.move();
    }

  }
class Game {
    constructor() {
      this.gameScreen = document.getElementById("game-screen");
      this.player = new Player(5, 3);
      this.airplanes = [new airplane()];
      this.targets = [new target()];
      this.bombs = [];
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
      if (this.frames % 120 === 0) {
        this.airplanes.push(new airplane());
      }

      if (this.frames % 600 === 0) {
        this.targets.push(new target());
      }
  
    }

    update() {
      
      this.player.move();

      this.airplanes.forEach((oneairplane,oneairplaneIndex)=>{
        oneairplane.move();
        if(oneairplane.left < -10 || oneairplane.left > 90){
          this.airplanes.splice(oneairplaneIndex, 1);
          oneairplane.element.remove();
        }
      });

      this.targets.forEach((oneTarget,oneTargetIndex)=>{
        oneTarget.move();
        if(oneTarget.left < -10){
          this.targets.splice(oneTargetIndex, 1);
          oneTarget.element.remove();
        }
      });

      this.bombs.forEach((oneBomb,oneBombIndex)=>{
        oneBomb.move();
        if (oneBomb.top > 84) {
          this.bombs.splice(oneBombIndex, 1);
          oneBomb.element.remove();
        }

        this.airplanes.forEach((oneAirplane, oneAirplaneIndex) => {
          if (oneBomb.didCollide(oneAirplane)) {
            
            this.bombs.splice(oneBombIndex, 1);
            oneBomb.element.remove();

            this.airplanes.splice(oneAirplaneIndex, 1);
            oneAirplane.element.remove();
          }

        });
      });
    }
  }
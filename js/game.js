class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-container");
      this.livesContainer = document.getElementById("lives");
      this.scoreElement = document.getElementById("score");
      this.endScreen = document.getElementById("game-end");
      this.player = new Player(5, 3);
      this.airplanes = [new airplane()];
      this.targets = [new target()];
      this.crashAireplanes = []
      this.bombs = [];
      this.score = 0;
      this.lives = 5;
      this.isGameOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = Math.round(1000 / 60);
      this.frames = 0;
    }

    start() {  

      this.gameScreen.style.display = "block";
      this.startScreen.style.display = "none";
      this.updateLifeHearts() ;
     
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }

    gameLoop() {
      this.frames++;
      this.update();

      if (this.isGameOver === true) {
        clearInterval(this.gameIntervalId);
        this.gameOver();
      }

      if (this.frames % 220 === 0) {
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

      this.crashAireplanes.forEach((oneCrash,oneCrashIndex)=>{
        oneCrash.move();
        if (oneCrash.left < 0 || oneCrash.left > 90){
          this.crashAireplanes.splice(oneCrashIndex, 1);
          oneCrash.element.remove();
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

            this.crashAireplanes.push(new crashairplane(oneAirplane.left,oneAirplane.top,oneAirplane.forth));

            this.lives--;
            if (this.lives === 0) {
              this.isGameOver = true;
            }
            this.updateLifeHearts();
          }
        });

        this.targets.forEach((oneTarget, oneTargetIndex) => {
          if (oneBomb.didCollide(oneTarget)) {
              
              this.bombs.splice(oneTargetIndex, 1);
              oneBomb.element.remove();
  
              this.targets.splice(oneTargetIndex, 1);
              oneTarget.element.remove();
              
              this.score ++;
              this.scoreElement.innerText = `Your Score: ${this.score}`;
             
          }
        });
      });
    }

    gameOver() {
      this.gameScreen.style.display = "none";
      this.endScreen.style.display = "block"; 
      this.x = document.getElementById("score"); 
      this.x.innerText = `the score is : ${this.score}`   
    }


    updateLifeHearts() {

      if (this.lives === 5) {
        for (let i = 0; i < this.lives; i++) {
          const imgElement = document.createElement("img");
          imgElement.src = "images/lifeon.png";
          imgElement.classList.add("life-on");
          imgElement.setAttribute("id", i);
          this.livesContainer.appendChild(imgElement);
        }
      }
      else {
        const imgElement = document.getElementById(this.lives);
        imgElement.src = "images/lifeoff.png";
      }

    } 
  }
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
      this.lives = 3;
      this.isGameOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = Math.round(1000 / 60);
      this.frames = 0;


      this.baseExplosion = new Audio("sounds/baseExplosion.wav");
      this.baseExplosion.volume = 0.1;
      this.explosion = new Audio("sounds/explosion.wav");
      this.explosion.volume = 0.1;
    }

    start() {  
      this.gameScreen.style.display = "block";
      this.startScreen.style.display = "none";
      this.updateLifeHearts() ;
      this.scoreElement.innerText = `Your Score: ${this.score}`;
     
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

      if (this.frames % 150 === 0) {
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
        this.redpointUpdate (this.player,oneTarget);
        if(oneTarget.left < -10){
          this.targets.splice(oneTargetIndex, 1);
          oneTarget.element.remove();
          oneTarget.redpoint.remove();
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
             

            if (this.crashAireplanes.at(-1).forth || this.crashAireplanes.at(-1).left > 35 ){
              const crashtimeoutId = setTimeout(() => {
                this.crashAireplanes.at(-1).element.style.visibility =`hidden`;
             }, 4000);
            }

            this.lives--;
            if (this.lives === 0) {
              this.isGameOver = true;
            }
            this.updateLifeHearts();
            this.explosion.play();
          }
        });

        this.targets.forEach((oneTarget, oneTargetIndex) => {
          if (oneBomb.didCollide(oneTarget)) {
              
              this.bombs.splice(oneTargetIndex, 1);
              oneBomb.element.remove();

              oneTarget.redpoint.remove();
              oneTarget.element.src = `images/baseexplosion.png `;

              if (oneTarget.left > 25){
                const timeoutId = setTimeout(() => {
                  oneTarget.element.style.visibility =`hidden`;
               }, 2000);
              }
              this.score ++;
              this.scoreElement.innerText = `Your Score: ${this.score}`;
              this.baseExplosion.play();
             
          }
        });
      });
    }

    gameOver() {
      this.gameScreen.style.display = "none";
      this.endScreen.style.display = "block"; 
      document.getElementById("final-score").innerText = `Your score is : ${this.score}`;   
    }


    updateLifeHearts() {

      if (this.lives === 3) {
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


    redpointUpdate (onePlayer,oneTarget){

      const distance = (oneTarget.left - onePlayer.left) - (oneTarget.top - onePlayer.top) * 0.4 ;
      const reducedDistance = distance / 10 ;

      if (oneTarget.top === 85){
          oneTarget.redpoint.style.top = `${26 + reducedDistance }%` ;
          oneTarget.redpoint.style.left = `${89 + reducedDistance }%`;
      } else {
          oneTarget.redpoint.style.top = `${26 - reducedDistance }%` ;
          oneTarget.redpoint.style.left = `${89 + reducedDistance }%`;
      }


      if ( oneTarget.redpoint.style.top <=`36%` && oneTarget.redpoint.style.top >= `16%` 
           && oneTarget.redpoint.style.left <= `95%` && oneTarget.redpoint.style.left >=`83.5%`) {
 
            oneTarget.redpoint.style.visibility = `visible`;
      }else{
            oneTarget.redpoint.style.visibility = `hidden`;
      }


    }
  }
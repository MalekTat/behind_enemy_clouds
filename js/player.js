class Player {
    constructor(top, left) {
      this.gameScreen = document.getElementById("game-container");
      this.top = top;
      this.left = left;
      this.width = 8;
      this.height = 6;
      this.directionX = 0;
      this.directionY = 0;

      //this is creating the player and adding him to the screen
      this.element = document.createElement("img");
      this.element.src = "images/bomber.png";
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;

      this.gameScreen.appendChild(this.element);

      // this is creating the bracket and pointer and adding them to the screen
      this.bracket = document.createElement("img");
      this.bracket.src = "images/bracket.png";
      this.bracket.style.position = "absolute";
      this.bracket.style.height = `10%`;
      this.bracket.style.width = `20%`;
      this.bracket.style.top = `87%`;
      this.bracket.style.left = `${this.left + 50}%`;

      this.gameScreen.appendChild(this.bracket);

      this.pointer = document.createElement("img");
      this.pointer.src = "images/pointer.png";
      this.pointer.style.position = "absolute";
      this.pointer.style.height = `2.5%`;
      this.pointer.style.width = `1.5%`;
      this.pointer.style.top = `94%`;
      this.pointer.style.left = `${this.left + 70 - this.top}%`;

      this.gameScreen.appendChild(this.pointer);

     
      
    }

    move() {
      this.left += this.directionX;
      this.top += this.directionY;
    
      if (this.left < 2) {
        this.left = 2;
      }
      
      if (this.left > 30 ) {
        this.left = 30;
      }
      
      if (this.top < 2) {
        this.top = 2;
      }

      if (this.top > 19.25) {
        this.top = 19.25;
      }

      this.updatePosition();
    }

    updatePosition() {   
      this.element.style.left = `${this.left}%`;
      this.element.style.top = `${this.top}%`;
      this.bracket.style.left= `${this.left + 50}%`;
      this.pointer.style.left = `${this.left + 70 - this.top}%`;
    }
   
  }
  
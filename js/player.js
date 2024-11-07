class Player {
    constructor(top, left) {
      this.gameScreen = document.getElementById("game-container");
      this.top = top;
      this.left = left;
      this.width = 8;
      this.height = 6;
      this.directionX = 0;
      this.directionY = 0;

    
      this.element = document.createElement("img");
      this.element.src = "images/bomber.png";
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;

      this.gameScreen.appendChild(this.element);
       
    }

    move() {
      this.left += this.directionX;
      this.top += this.directionY;
    
      if (this.left < 2) {
        this.left = 2;
      }
      
      if (this.left > 60 ) {
        this.left = 60;
      }
      
      if (this.top < 2) {
        this.top = 2;
      }

      if (this.top > 25) {
        this.top = 25;
      }

      this.updatePosition();
    }

    updatePosition() {   
      this.element.style.left = `${this.left}%`;
      this.element.style.top = `${this.top}%`;
    }
   
  }
  
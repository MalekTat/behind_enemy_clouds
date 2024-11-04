class Player {
    constructor(top, left) {
      this.gameScreen = document.getElementById("game-container");
      this.top = top;
      this.left = left;
      this.width = 100;
      this.height = 50;
      this.directionX = 0;
      this.directionY = 0;

      //this is creating the player and adding him to the screen
      this.element = document.createElement("img");
      this.element.src = "../images/bomber.png";
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;

      this.gameScreen.appendChild(this.element);

      // this is creating the bracket and pointer and adding them to the screen
      this.bracket = document.createElement("img");
      this.bracket.src = "../images/bracket.png";
      this.bracket.style.position = "absolute";
      this.bracket.style.height = `100px`;
      this.bracket.style.width = `400px`;
      this.bracket.style.top = `760px`;
      this.bracket.style.left = `${this.left + 600}px`;

      this.gameScreen.appendChild(this.bracket);

      this.pointer = document.createElement("img");
      this.pointer.src = "../images/pointer.png";
      this.pointer.style.position = "absolute";
      this.pointer.style.height = `25px`;
      this.pointer.style.width = `25px`;
      this.pointer.style.top = `833px`;
      this.pointer.style.left = `${this.left + 990 - this.top}px`;

      this.gameScreen.appendChild(this.pointer);

     
      
    }

    move() {
      this.left += this.directionX;
      this.top += this.directionY;
      /*
      //this keeps the car from going to far left
      if (this.left < 25) {
        this.left = 30;
      }
      //this keeps the car from going to far Right
      if (this.left + this.width > 370) {
        this.left = 365 - this.width;
      }
      //this keeps the player from going to far up
      if (this.top < 0) {
        this.top = 0;
      }
      //this keeps the player from going to far down
      if (this.top + this.height > 535) {
        this.top = 535 - this.height;
      }*/
      this.updatePosition();
    }

    updatePosition() {   
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.bracket.style.left= `${this.left + 600}px`;
      this.pointer.style.left = `${this.left + 990 - this.top}px`;
    }
   
  }
  
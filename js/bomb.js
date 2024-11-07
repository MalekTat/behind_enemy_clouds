
class bomb {
    constructor(positionX, positionY) {
      this.gameScreen = document.getElementById("game-container");
      this.left = positionX;
      this.top = positionY;
      this.width = 4;
      this.height = 5;
        

      this.element = document.createElement("img");
      this.element.src = "images/bomb.png";
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;
    
      this.gameScreen.appendChild(this.element);
    }

    move() {
      this.top += 0.40;
      this.updatePosition();
    }

    updatePosition() {   
      this.element.style.left = `${this.left}%`;
      this.element.style.top = `${this.top}%`;
    
    }

    didCollide(object) {
      const objRect = object.element.getBoundingClientRect();
      const bombRect = this.element.getBoundingClientRect();
    
      if (
          objRect.left < bombRect.right &&
          objRect.right > bombRect.left &&
          objRect.top < bombRect.bottom &&
          objRect.bottom > bombRect.top
        ) {
          return true;
      } else {
          return false;
      }
    }
}
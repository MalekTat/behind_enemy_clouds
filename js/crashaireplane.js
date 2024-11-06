class crashairplane {
    constructor(left,top,forth) {
      this.gameScreen = document.getElementById("game-container");
      
      this.left = left;
      this.top = top;
      this.forth = forth;
      this.width = 10;
      this.height = 10;
      
     
      this.element = document.createElement("img");
      this.element.src = `images/crash.png`;
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;
      if(this.forth) this.element.classList.add("img-flip")
     
      this.gameScreen.appendChild(this.element);
    }
    move() {

        if (this.top < 78 ){
            this.top += 0.2;
            if(this.forth){
                this.left += 0.09;
            }
            else {  
                this.left += -0.09;
            }
        } else {
            this.element.src = `images/explosion.png`;
            this.left += -0.09
        }
           
      this.updatePosition();
    }

    updatePosition() {
      this.element.style.left = `${this.left}%`;
      this.element.style.top = `${this.top}%`;
    }
  }
class target {
    constructor() {
      this.gameScreen = document.getElementById("game-container");
      this.positions =[{left:90,top:83},{left:90,top:85}];
      this.randomIndex = Math.floor(Math.random() * this.positions.length);
      this.left = this.positions[this.randomIndex].left;
      this.top = this.positions[this.randomIndex].top;
      this.width = 10;
      this.height = 7;
      
     
      this.element = document.createElement("img");
      this.randNum = Math.floor(Math.random() * 3 )
      this.element.src = `images/targets/target${this.randNum}.png`;
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;
     
      this.gameScreen.appendChild(this.element);
    }
    move() {
      this.left += -0.1;
      this.updatePosition();
    }
    updatePosition() {
      this.element.style.left = `${this.left}%`;
    }
  }

  



class target {
    constructor() {
      this.gameScreen = document.getElementById("game-container");
      this.positions =[{left:90,top:83},{left:90,top:85}];
      this.randomIndex = Math.floor(Math.random() * this.positions.length);
      this.left = this.positions[this.randomIndex].left;
      this.top = this.positions[this.randomIndex].top;
      this.width = 7;
      this.height = 7;
     
      this.element = document.createElement("img");
      this.randNum = Math.floor(Math.random() * 14 )
      this.element.src = `images/targets/target${this.randNum}.png`;
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;
     
      this.gameScreen.appendChild(this.element);

      this.redpoint= document.createElement("img");
      this.redpoint.src = `images/targets/redpoint.png`;
      this.redpoint.style.position = "absolute";
      this.redpoint.style.height = `2%`;
      this.redpoint.style.width = `1%`;
      this.redpoint.style.top = `20%`;
      this.redpoint.style.left = `20%`;
      this.redpoint.style.visibility = `hidden`;

      this.gameScreen.appendChild(this.redpoint);
    }


    move() {
      this.left += -0.16;
      this.updatePosition();
    }

    updatePosition() {
      this.element.style.left = `${this.left}%`;
    }
  }

  



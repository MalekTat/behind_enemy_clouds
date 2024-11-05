class airplane {
    constructor() {
      this.gameScreen = document.getElementById("game-container");
      this.positions =[{left:0,top:40,forth:true},{left:88,top:50,forth:false}];
      this.randomIndex = Math.floor(Math.random() * this.positions.length);
      this.left = this.positions[this.randomIndex].left;
      this.top = this.positions[this.randomIndex].top;
      this.forth = this.positions[this.randomIndex].forth;
      this.width = 10;
      this.height = 7;
      
     
      this.element = document.createElement("img");
      this.randNum = Math.floor(Math.random() * 6 )
      this.element.src = `images/airlines/airline${this.randNum}.png`;
      this.element.style.position = "absolute";
      this.element.style.height = `${this.height}%`;
      this.element.style.width = `${this.width}%`;
      this.element.style.top = `${this.top}%`;
      this.element.style.left = `${this.left}%`;
      if(this.forth) this.element.classList.add("img-flip")
     
      this.gameScreen.appendChild(this.element);
    }
    move() {
      if(this.forth){
        this.left += 0.2;
      } else {
        this.left += -0.4;
      }
      this.updatePosition();
    }
    updatePosition() {
      this.element.style.left = `${this.left}%`;
    }
  }
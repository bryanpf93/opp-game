

class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;

        this.updateUI()
    }

    updateUI() {
        const playerElm = document.querySelector("#player")
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"
        playerElm.style.width = this.width + "vw"
        playerElm.style.height = this.height + "vh"
    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--
            this.updateUI()
        }
    }

    moveRight() {
        if (this.positionX < 100 - this.width) {
            this.positionX++
            this.updateUI()
        }
    }
}

class Obstacle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1))
        this.positionY = 100;
        this.obstacleElm = null

        this.createDomElement() // create obstacles 
        this.updateUI()
    }

    createDomElement() {
        // step1: create the element with document.createElement()
        this.obstacleElm = document.createElement("div")

        // step2: add content or modify
        this.obstacleElm.className = "obstacle"

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }

    updateUI() {
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
    }

    moveDown() {
        this.positionY--
        this.updateUI()
    }
}



const player = new Player()

let obstacleArr = []

// generate new obstacles
setInterval(() => {
    const newObstacle = new Obstacle() // cada 4 segundos crear uns instancia de la clase obstacle
    obstacleArr.push(newObstacle)
}, 4000);

// move obstacles 
setInterval(() => {
    obstacleArr.forEach((obstacleInstance, i, arr) => {
        // move
        obstacleInstance.moveDown()

        // detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log("game over my fren !")
            location.href = "gameover.html"
        }
    })
}, 30)

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
        console.log("<-----")
    } else if (e.code === "ArrowRight") {
        player.moveRight()
        console.log("----->")
    }
})
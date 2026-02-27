

class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.witdh = 10;
        this.height = 10;

        this.updateUI()
    }

    updateUI() {
        const playerElm = document.querySelector("#player")
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"
        playerElm.style.width = this.witdh + "vw"
        playerElm.style.height = this.height + "vh"


    }

    moveLeft() {
        if (this.positionX > 0) {
            this.positionX--
            this.updateUI()
        }
    }

    moveRight() {
        if (this.positionX < 100 - this.witdh) {
            this.positionX++
            this.updateUI()
        }


    }
}



const player = new Player()

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
        player.moveLeft()
        console.log("<-----")
    } else if (e.code === "ArrowRight") {
        player.moveRight()
        console.log("----->")
    }

})
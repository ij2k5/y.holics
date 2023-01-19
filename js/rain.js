const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let total
let rains = []
let drops = []

// rain class
class Rain {
    constructor(x, y, velocity) {
        this.x = x
        this.y = y
        this.velocity = velocity
    }

    draw() {
        const { x, y, velocity } = this
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + velocity.x * 2, y + velocity.y * 2)
        ctx.strokeStyle = '#8899a6'
        ctx.lineWidth = 1.5
        ctx.stroke()
    }

    splash() {
        for (let i = 0; i < 3; i++) {
            const velocity = {
                x: -this.velocity.x + randomBetween(-2, 2),
                y: -this.velocity.y + randomBetween(5, 10)
            }
            drops.push(new Drop(this.x, innerHeight, velocity))
        }
    }

    animate() {
        if (this.y > innerHeight) {
            this.splash()
            this.x = randomBetween(0, innerWidth)
            this.y = -20
        }
        this.x += this.velocity.x
        this.y += this.velocity.y

        this.draw()
    }
}

//drop class
class Drop {
    constructor(x, y, velocity) {
        this.x = x
        this.y = y
        this.velocity = velocity
        this.gravity = 2.5
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = '#8899a6'
        ctx.fill()
    }

    animate() {
        this.velocity.y += this.gravity
        this.x += this.velocity.x
        this.y += this.velocity.y

        this.draw()
    }
}

//reseting class
function init() {
    canvas.width = innerWidth
    canvas.height = innerHeight

    total = Math.floor(innerWidth * innerHeight / 15000)
    rains = []
    drops = []

    for (let i = 0; i < total; i++) {
        const x = randomBetween(0, innerWidth)
        const y = randomBetween(0, innerHeight)
        const velocity = {
            x: randomBetween(-1, 1),
            y: randomBetween(23, 28)
        }
        rains.push(new Rain(x, y, velocity))
    }
}

//rendering f(x)
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    rains.forEach(Rain => Rain.animate())
    drops.forEach((drop, index) => {
        drop.animate()
        if (drop.y > innerHeight) drops.splice(index, 1)
    })

    window.requestAnimationFrame(render)
}

//resize event
window.addEventListener('resize', () => init())

init()
render()


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
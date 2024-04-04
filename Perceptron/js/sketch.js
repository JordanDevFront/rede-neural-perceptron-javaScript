let points = new Array(10)
function setup(){
    createCanvas(480, 360)

    for(let i = 0; i < points.length; i++){
        points[i] = new Point(random(-1, 1), random(-1, 1))
    }
}

function draw(){
    background(0,0,0)

    for(let i = 0; i < points.length; i++){
        points[i].show()
    }
}
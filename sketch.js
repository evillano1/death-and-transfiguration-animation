
let ball1 ={x: 100, y:550, size: 7, vx: 9, vy:0, color:[0,0, 0]}
let ball2 ={x: 1000, y:550, size: 7, vx: -9, vy:0, color:[0,0, 0]} //bottom


let balls = [ball1, ball2]

let ball3 ={x: 100, y:200, size: 7, vx: 7, vy:0, color:[0,0, 0]}
let ball4 ={x: 1000, y:200, size: 7, vx: -7, vy:0, color:[0,0, 0]}//top

let balls2 = [ball3, ball4]

let ball5 ={x: 20, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball6 ={x: 40, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball7 ={x: 60, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball8 ={x: 80, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball9 ={x: 100, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball10 ={x: 120, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball11 ={x: 140, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball12 ={x: 160, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball13 ={x: 180, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}

let balls3 = [ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13]


let ball14 ={x: 200, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}
let ball15 ={x: 220, y:0, size: 10, vx: 0, vy:5, color:[0, 0, 0, 50]}

let balls4 = [ball14, ball15]


// let ball24 ={x: 500, y:60, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
// let ball23 ={x: 500, y:100, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball22 ={x: 500, y:140, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball16 ={x: 500, y:180, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball17 ={x: 500, y:220, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball18 ={x: 500, y:260, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball19 ={x: 500, y:300, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball20 ={x: 500, y:340, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}
let ball21 ={x: 500, y:380, size: 10, vx: 5, vy:0 , color:[0, 0, 0, 50]}

let balls5 = [ball16, ball17, ball18, ball19, ball20, ball21, ball22] //middle


let bouncing_balls = []


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

    for (let i=0; i<20; i++) {

      let random_ball = {x:random(0, width),
                          y:0,
                          size:3,
                          vx:random(1, 10),
                          vy:random(1, 10),
                          color:[0, 0, random(0, 20), 150],
                          angle: random(0, 360)}

        bouncing_balls.push(random_ball)
        }


}


function draw() {

   // background("piece.png")


for (let ball of balls3) {

   noStroke()
   fill(ball.color)
   circle(ball.x, ball.y, ball.size)

   ball.x = ball.x + ball.vx

   if (ball.x >= width){
     ball.vx = -ball.vx
   }

   if (ball.x <= 0){
     ball.vx = -ball.vx
   }


   ball.vy = ball.vy + .3 //gravity

   ball.y = ball.y + ball.vy

   if (ball.y >= height){
     ball.vy = -ball.vy * 1.0 //bounce
   }

   if (ball.y <= 0){
     ball.vy = -ball.vy
   }
}

for (let ball of balls4) {

   noStroke()
   fill(ball.color)
   circle(ball.x, ball.y, ball.size)

   ball.x = ball.x + ball.vx

   if (ball.x >= width){
     ball.vx = -ball.vx
   }

   if (ball.x <= 0){
     ball.vx = -ball.vx
   }


   ball.vy = ball.vy + .3 //gravity

   ball.y = ball.y + ball.vy

   if (ball.y >= 420){  //>=height
     ball.vy = -ball.vy * 1.0 //bounce
   }

   if (ball.y <= 0){
     ball.vy = -ball.vy
   }
}


for (let ball of balls5) {

   // noStroke()
   // fill(ball.color)
   // circle(ball.x, ball.y, ball.size)

   stroke(255, 255, 255, 50)
   fill(ball.color)
   circle(ball.x, ball.y, ball.size)

   ball.x = ball.x + ball.vx

   if (ball.x >= width){
     ball.vx = -ball.vx
   }

   if (ball.x <= 500){
     ball.vx = -ball.vx
   }


   ball.vy = ball.vy + .1 //gravity

   ball.y = ball.y + ball.vy

   if (ball.y >= height){
     ball.vy = -ball.vy * 1.0 //bounce
   }

   if (ball.y <= 0){
     ball.vy = -ball.vy
   }
}






  for (let ball of bouncing_balls) {

noStroke()
fill(ball.color)
circle(ball.x, ball.y, ball.size)

ball.x = ball.x + ball.vx

if (ball.x >= width){
  ball.vx = -ball.vx
}

if (ball.x <= 0){
  ball.vx = -ball.vx
}


ball.vy = ball.vy + .3 //gravity

ball.y = ball.y + ball.vy

if (ball.y >= height){
  ball.vy = -ball.vy * 1.0 //bounce
}

if (ball.y <= 0){
  ball.vy = -ball.vy
}
}


for (let ball of balls) {

    noStroke()
    fill(ball.color)
    square(ball.x, ball.y, ball.size)

    ball.x = ball.x + ball.vx

    if (ball.x >= width){
      ball.vx = -ball.vx
    }

    if (ball.x <= 0){
      ball.vx = -ball.vx
    }


    ball.vy = ball.vy + .3 //gravity

    ball.y = ball.y + ball.vy

    if (ball.y >= height){
      ball.vy = -ball.vy * 1.0 //bounce
    }

    if (ball.y <= 0){
      ball.vy = -ball.vy
    }

for (let other_ball of balls) {
        if (other_ball != ball) {   // don't compare with itself!

            // how close do they have to be to touch?
            let touching = abs(ball.size/2 + other_ball.size/2)

            // how far apart are they now?
            let distance = dist(ball.x, ball.y, other_ball.x, other_ball.y)

            // if theyre touching, bounce them
            // (not real physics, but close enough for now)
            if (distance <= touching) {
                ball.vx *= -1
                ball.vy *= -1
                ball.x += ball.vx
                ball.y += ball.vy
            }
            }
        }

for (let ball of balls2) {

      noStroke()
      fill(ball.color)
      square(ball.x, ball.y, ball.size)

      ball.x = ball.x + ball.vx

      if (ball.x >= width){
      ball.vx = -ball.vx
      }

      if (ball.x <= 0){
        ball.vx = -ball.vx
      }

      ball.vy = ball.vy + -.3 //gravity

      ball.y = ball.y + ball.vy

      if (ball.y >= height){
        ball.vy = -ball.vy * 1.0 //bounce
      }

      if (ball.y <= 0){
          ball.vy = -ball.vy
      }

        for (let other_ball of balls2) {
                if (other_ball != ball) {   // don't compare with itself!

                    // how close do they have to be to touch?
                    let touching = abs(ball.size/2 + other_ball.size/2)

                    // how far apart are they now?
                    let distance = dist(ball.x, ball.y, other_ball.x, other_ball.y)

                    // if theyre touching, bounce them
                    // (not real physics, but close enough for now)
                    if (distance <= touching) {
                        ball.vx *= -1
                        ball.vy *= -1
                        ball.x += ball.vx
                        ball.y += ball.vy
                    }
                    }
                  }
}
}
}

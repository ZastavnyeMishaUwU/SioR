var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var ball=document.getElementById("ball");
var bg=document.getElementById("bg");
var paddle=document.getElementById("paddle");
var paddlePat=ctx.createPattern(paddle,"repeat");
var paddleHeight = 22;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var ballRadius = 10;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var audio = new Audio('audio/score.mp3');
var audioScore = new Audio('audio/score.mp3');
var audioWall = new Audio('audio/wall.mp3');
var audioPad = new Audio('audio/paddle.mp3');
var audioGameOver = new Audio('audio/game_over.mp3');
var audioGame = new Audio('audio/game.mp3');
var audioOver = new Audio('audio/over.mp3');
var audioDelay = 1000; // 1 second
audio.currentTime = 0;
var lives = 3;


var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);
// function mouseMoveHandler(e){
//     var relativeX = e.clientX - canvas.offsetLeft;
//     if(relativeX > 0 + 27 &&relativeX < canvas.width - 27) {
//         paddleX = relativeX - paddleWidth/2;
//     }

// }

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    audioScore.play();
                    setTimeout(function(){
                        audioScore.play();
                        audioScore.pause();
                        audioScore.currentTime = 0;
                    }, audioDelay);
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        audioGame.play();
                        setTimeout(function(){
                            audioGame.play();
                            audioGame.pause();
                            audioGame.currentTime = 0;
                        }, audioDelay);
                        document.location.reload();
                    }
                }
            }
        }
    }
}


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "Yellow";
    ctx.fillText("Lives:"+lives, canvas.width-65, 20);
}

function drawBall() {
    ctx.drawImage(ball, x-15, y-15);
}

function drawPaddle() {
    ctx.drawImage(paddle, paddleX, canvas.height-paddleHeight+11);
    audio.play();
    setTimeout(function(){
        audio.pause();
        audio.currentTime = 0;
    }, audioDelay);
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "Yallow";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        audioWall.play();
        setTimeout(function(){
            audioWall.pause();
            audioWall.currentTime = 0;
            }, audioDelay);
      }
      if(y + dy < ballRadius) {
        dy = -dy;
        audioWall.play();
        setTimeout(function(){
            audioWall.pause();
            audioWall.currentTime = 0;
            }, audioDelay);
      }
      else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
          audioPad.play();
        setTimeout(function(){
            audioPad.pause();
            audioPad.currentTime = 0;
            }, audioDelay);
        }
        else {
            
          lives--;
          if(!lives) {
            audioOver.play();
            setTimeout(function(){
                audioOver.pause();
                audioOver.currentTime = 0;
                }, audioDelay);
            alert("GAME OVER");
            document.location.reload();
          }
          else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth)/2;
            audioGameOver.play();
            setTimeout(function(){
                audioGameOver.pause();
                audioGameOver.currentTime = 0;
                }, audioDelay);
          }
        }
      }
      
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}



draw();
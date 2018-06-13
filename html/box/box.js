var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//score

var playerScore = 0;
var playerLives = 3;

//Player box
var playerWidth = 15;
var playerHeight = 15;
var playerX = canvas.width/ 2 - playerWidth/2;
var playerY = canvas.height/ 2 - playerHeight/2;
var playerVelocity = 2;

//bounding box
var boundBoxX = 175;
var boundBoxY = 175;
var boundBoxWidth = 130;
var boundBoxHeight = 130;
var boundBoxWidthXY = 305;
var boundBoxHeightXY = 305;


//Player Controls
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//Enemy Boxes
var enemyWidth = 10;
var enemyHeight = 10;
var enemyVelocityX = [2.5, 2.9, 3, 3.2, 3.5];
var enemyVelocityY = [2.7, 2.8, 3.1, 3.3, 3.6];

//enemyOne
var enemyOX = 10; //SEPERATE ENEMY CODE ===============================
var enemyOY = 25;
var enemyOVelocityXR;
var enemyOVelocityYR;

//enemyTWo
var enemyTWX = 10; //SEPERATE ENEMY CODE ===============================
var enemyTWY = 50;
var enemyTWVelocityXR;
var enemyTWVelocityYR;

//enemyTHree
var enemyTHX = 470; //SEPERATE ENEMY CODE ===============================
var enemyTHY = 75;
var enemyTHVelocityXR;
var enemyTHVelocityYR;

//enemyFOur
var enemyFOX = 470; //SEPERATE ENEMY CODE ===============================
var enemyFOY = 100;
var enemyFOVelocityXR;
var enemyFOVelocityYR;

//enemyFIve
var enemyFIX = 10; //SEPERATE ENEMY CODE ===============================
var enemyFIY = 440;
var enemyFIVelocityXR;
var enemyFIVelocityYR;

//enemySIx
var enemySIX = 10; //SEPERATE ENEMY CODE ===============================
var enemySIY = 465;
var enemySIVelocityXR;
var enemySIVelocityYR;

//enemySEven
var enemySEX = 465; //SEPERATE ENEMY CODE ===============================
var enemySEY = 465;
var enemySEVelocityXR;
var enemySEVelocityYR;

//enemyEIight
var enemyEIX = 445; //SEPERATE ENEMY CODE ===============================
var enemyEIY = 445;
var enemyEIVelocityXR;
var enemyEIVelocityYR;

//enemyNIne
var enemyNIX = 440; //SEPERATE ENEMY CODE ===============================
var enemyNIY = 240;
var enemyNIVelocityXR;
var enemyNIVelocityYR;

//enemyTEn
var enemyTEX = 440; //SEPERATE ENEMY CODE ===============================
var enemyTEY = 200;
var enemyTEVelocityXR;
var enemyTEVelocityYR;

//enemyELeven
var enemyELX = 10; //SEPERATE ENEMY CODE ===============================
var enemyELY = 240;
var enemyELVelocityXR;
var enemyELVelocityYR;

//enemyTWElve
var enemyTWEX = 10; //SEPERATE ENEMY CODE ===============================
var enemyTWEY = 200;
var enemyTWEVelocityXR;
var enemyTWEVelocityYR;

//randomized values for the velocity

var sign = 1;
var mathSign;
//Functions below
//Start the game


function startGame() {
  playerX = canvas.width/ 2 - playerWidth/2;
  playerY = canvas.height/ 2 - playerHeight/2;
  enemyOX = 10; //SEPERATE ENEMY CODE ===============================
  enemyOY = 25;
  enemyTWX = 10; //SEPERATE ENEMY CODE ===============================
  enemyTWY = 50;
  enemyTHX = 470; //SEPERATE ENEMY CODE ===============================
  enemyTHY = 75;
  enemyFOX = 470; //SEPERATE ENEMY CODE ===============================
  enemyFOY = 100;
  enemyFIX = 10; //SEPERATE ENEMY CODE ===============================
  enemyFIY = 440;
  enemySIX = 10; //SEPERATE ENEMY CODE ===============================
  enemySIY = 465;
  enemySEX = 465; //SEPERATE ENEMY CODE ===============================
  enemySEY = 465;
  enemyEIX = 445; //SEPERATE ENEMY CODE ===============================
  enemyEIY = 445;
  enemyNIX = 440; //SEPERATE ENEMY CODE ===============================
  enemyNIY = 240;
  enemyTEX = 440; //SEPERATE ENEMY CODE ===============================
  enemyTEY = 200;
  enemyELX = 10; //SEPERATE ENEMY CODE ===============================
  enemyELY = 240;
  enemyTWEX = 10; //SEPERATE ENEMY CODE ===============================
  enemyTWEY = 200;
  draw();
  drawScore();
  upPressed = false;
  downPressed = false;
  leftPressed = false;
  rightPressed = false;
}

//Drawing Everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawBox();
  playerMovement();
  drawScore();
  //enemyO
  drawEnemyO(); //SEPERATE ENEMY CODE ===============================
  enemyOMovement(); //SEPERATE ENEMY CODE ===============================
  collisionWallEnemyO(); //SEPERATE ENEMY CODE ===============================
  collisionPlayerEnemyO(); //SEPERATE ENEMY CODE ===============================
  drawLives();

  //enemyTW
  if (playerScore > 20) { //SEPERATE ENEMY CODE ===============================
    drawEnemyTW(); //SEPERATE ENEMY CODE ===============================
    enemyTWMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyTW(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyTW(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyTH
  if (playerScore > 40) { //SEPERATE ENEMY CODE ===============================
    drawEnemyTH(); //SEPERATE ENEMY CODE ===============================
    enemyTHMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyTH(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyTH(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyFO
  if (playerScore > 60) { //SEPERATE ENEMY CODE ===============================
    drawEnemyFO(); //SEPERATE ENEMY CODE ===============================
    enemyFOMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyFO(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyFO(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyFI
  if (playerScore > 80) { //SEPERATE ENEMY CODE ===============================
    drawEnemyFI(); //SEPERATE ENEMY CODE ===============================
    enemyFIMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyFI(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyFI(); //SEPERATE ENEMY CODE ===============================
  }

  //enemySI
  if (playerScore > 100) { //SEPERATE ENEMY CODE ===============================
    drawEnemySI(); //SEPERATE ENEMY CODE ===============================
    enemySIMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemySI(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemySI(); //SEPERATE ENEMY CODE ===============================
  }

  //enemySE
  if (playerScore > 120) { //SEPERATE ENEMY CODE ===============================
    drawEnemySE(); //SEPERATE ENEMY CODE ===============================
    enemySEMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemySE(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemySE(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyEI
  if (playerScore > 140) { //SEPERATE ENEMY CODE ===============================
    drawEnemyEI(); //SEPERATE ENEMY CODE ===============================
    enemyEIMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyEI(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyEI(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyNI
  if (playerScore > 160) { //SEPERATE ENEMY CODE ===============================
    drawEnemyNI(); //SEPERATE ENEMY CODE ===============================
    enemyNIMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyNI(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyNI(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyTE
  if (playerScore > 180) { //SEPERATE ENEMY CODE ===============================
    drawEnemyTE(); //SEPERATE ENEMY CODE ===============================
    enemyTEMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyTE(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyTE(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyEL
  if (playerScore > 200) { //SEPERATE ENEMY CODE ===============================
    drawEnemyEL(); //SEPERATE ENEMY CODE ===============================
    enemyELMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyEL(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyEL(); //SEPERATE ENEMY CODE ===============================
  }

  //enemyTWE
  if (playerScore > 220) { //SEPERATE ENEMY CODE ===============================
    drawEnemyTWE(); //SEPERATE ENEMY CODE ===============================
    enemyTWEMovement(); //SEPERATE ENEMY CODE ===============================
    collisionWallEnemyTWE(); //SEPERATE ENEMY CODE ===============================
    collisionPlayerEnemyTWE(); //SEPERATE ENEMY CODE ===============================
  }
}

function drawPlayer() {
  ctx.beginPath();
  ctx.rect(playerX, playerY, playerWidth, playerHeight);
  ctx.fillStyle = "#4587AD";
  ctx.fill();
  ctx.closePath();
}
//BOUNDING BOX FOR PLAYER
function drawBox() {
  ctx.beginPath();
  ctx.rect(boundBoxX, boundBoxY, boundBoxWidth, boundBoxHeight);
  ctx.strokeStyle = "#4587AD";
  ctx.stroke();
  ctx.closePath();
}

function drawScore() {
  ctx.font = "18px Comic Sans MS";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(playerScore, 25, canvas.height - 20);
}

function drawLives() {
  ctx.font = "18px Comic Sans MS";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(playerLives, 460, 30);
}

function updateScore() {
  playerScore ++
}

//Player Controls & Movement
//Keys Down
function keyDownHandler(e) {
  if(e.keyCode == 38) {
    upPressed = true;
  } else if(e.keyCode == 40) {
    downPressed = true;
  } else if(e.keyCode == 37) {
    leftPressed = true;
  } else if(e.keyCode == 39) {
    rightPressed = true;
  }
}
//Keys up
function keyUpHandler(e) {
  if(e.keyCode == 38) {
    upPressed = false;
  } else if(e.keyCode == 40) {
    downPressed = false;
  } else if(e.keyCode == 37) {
    leftPressed = false;
  } else if(e.keyCode == 39) {
    rightPressed = false;
  }
}

//Player Movement with bounding box
function playerMovement() {
  if(upPressed && leftPressed && !(playerY <= boundBoxY) && !(playerX <= boundBoxX)) { //half works
    playerY -= playerVelocity;
    playerX -= playerVelocity;
  } else if(upPressed && rightPressed && !(playerY <= boundBoxY) && !(playerX >= boundBoxWidthXY - playerWidth)) {
    playerY -= playerVelocity;
    playerX += playerVelocity;
  } else if(downPressed && leftPressed && !(playerY >= boundBoxHeightXY - playerHeight) && !(playerX <= boundBoxX)) {
    playerY += playerVelocity;
    playerX -= playerVelocity;
  } else if(downPressed && rightPressed && !(playerY >= boundBoxHeightXY - playerHeight) && !(playerX >= boundBoxWidthXY - playerWidth)) {
    playerY += playerVelocity;
    playerX += playerVelocity;
  } else if(downPressed && !(playerY >= boundBoxHeightXY - playerHeight)) {
    playerY += playerVelocity;
  } else if(upPressed && !(playerY <= boundBoxY)) { //works
    playerY -= playerVelocity;
  } else if(leftPressed && !(playerX <= boundBoxX)) { //works
    playerX -= playerVelocity;
  } else if(rightPressed && !(playerX >= boundBoxWidthXY - playerWidth)) { //broken
    playerX += playerVelocity;
  }
}

/* FULL CANVAS MOVEMENT ================================================CHANGE THIS TO IMPLEMENT FULL CANVAS MOVEMENT FOR PLAYER==============================
function playerMovement() {
  if(upPressed && leftPressed && !(playerY <= 0) && !(playerX <= 0)) {
    playerY -= playerVelocity;
    playerX -= playerVelocity;
  } else if(upPressed && rightPressed && !(playerY <= 0) && !(playerX >= canvas.width - playerWidth)) {
    playerY -= playerVelocity;
    playerX += playerVelocity;
  } else if(downPressed && leftPressed && !(playerY >= canvas.height - playerHeight) && !(playerX <= 0)) {
    playerY += playerVelocity;
    playerX -= playerVelocity;
  } else if(downPressed && rightPressed && !(playerY >= canvas.height - playerHeight) && !(playerX >= canvas.width - playerWidth)) {
    playerY += playerVelocity;
    playerX += playerVelocity;
  } else if(downPressed && !(playerY >= canvas.height - playerHeight)) {
    playerY += playerVelocity;
  } else if(upPressed && !(playerY <= 0)) {
    playerY -= playerVelocity;
  } else if(leftPressed && !(playerX <= 0)) {
    playerX -= playerVelocity;
  } else if(rightPressed && !(playerX >= canvas.width - playerWidth)) {
    playerX += playerVelocity;
  }
}*/

//Enemies
//enemyO
function drawEnemyO() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyOX, enemyOY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#B42420"
  ctx.fill();
  ctx.closePath();
}
//enemyTW
function drawEnemyTW() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyTWX, enemyTWY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#E3A24B"
  ctx.fill();
  ctx.closePath();
}
//enemyTH
function drawEnemyTH() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyTHX, enemyTHY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#EC5117"
  ctx.fill();
  ctx.closePath();
}
//enemyFO
function drawEnemyFO() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyFOX, enemyFOY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#06853E"
  ctx.fill();
  ctx.closePath();
}
//enemyFI
function drawEnemyFI() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyFIX, enemyFIY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#03FF13"
  ctx.fill();
  ctx.closePath();
}
//enemySI
function drawEnemySI() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemySIX, enemySIY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#03FFCA"
  ctx.fill();
  ctx.closePath();
}
//enemySE
function drawEnemySE() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemySEX, enemySEY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#A703FF"
  ctx.fill();
  ctx.closePath();
}
//enemyEI
function drawEnemyEI() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyEIX, enemyEIY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#895EA0"
  ctx.fill();
  ctx.closePath();
}
//enemyNI
function drawEnemyNI() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyNIX, enemyNIY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#EC5117"
  ctx.fill();
  ctx.closePath();
}
//enemyTE
function drawEnemyTE() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyTEX, enemyTEY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#FF00F7"
  ctx.fill();
  ctx.closePath();
}
//enemyEL
function drawEnemyEL() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyELX, enemyELY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#0581A33"
  ctx.fill();
  ctx.closePath();
}
//enemyTWE
function drawEnemyTWE() { //SEPERATE ENEMY CODE ===============================
  ctx.beginPath();
  ctx.rect(enemyTWEX, enemyTWEY, enemyWidth, enemyHeight);
  ctx.fillStyle = "#000000"
  ctx.fill();
  ctx.closePath();
}

//Enemy Movement
function randomVel() {
  //enemyO
  signCalc();
  enemyOVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyOVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyTW
  signCalc();
  enemyTWVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyTWVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyTH
  signCalc();
  enemyTHVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyTHVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyFO
  signCalc();
  enemyFOVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyFOVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyFI
  signCalc();
  enemyFIVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyFIVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemySI
  signCalc();
  enemySIVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemySIVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemySE
  signCalc();
  enemySEVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemySEVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyEI
  signCalc();
  enemyEIVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyEIVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyNI
  signCalc();
  enemyNIVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyNIVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyTE
  signCalc();
  enemyTEVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyTEVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyEL
  signCalc();
  enemyELVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyELVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================

  //enemyTWE
  signCalc();
  enemyTWEVelocityXR = (enemyVelocityX[Math.floor(Math.random() * enemyVelocityX.length)]) * sign; //SEPERATE ENEMY CODE ===============================
  signCalc();
  enemyTWEVelocityYR = (enemyVelocityY[Math.floor(Math.random() * enemyVelocityY.length)]) * sign; //SEPERATE ENEMY CODE ===============================
}

function signCalc() { //========================================================================================================
  mathSign = Math.round(Math.random());
  //console.log("mathSign " + mathSign);
  if (mathSign != 0) {
    sign = -1;
    //console.log("sign should be negative") // something is wrong with this block of code but it is working for some reason
  } else if (mathSign = 1) {
    sign = sign * 1;
    //console.log("sign should be pos")
  }
} //========================================================================================================

randomVel();
//enemyO
function enemyOMovement() { //SEPERATE ENEMY CODE ===============================
  enemyOY = enemyOY + enemyOVelocityYR;
  enemyOX = enemyOX + enemyOVelocityXR;
}
//enemyTW
function enemyTWMovement() { //SEPERATE ENEMY CODE ===============================
  enemyTWY = enemyTWY + enemyTWVelocityYR;
  enemyTWX = enemyTWX + enemyTWVelocityXR;
}
//enemyTH
function enemyTHMovement() { //SEPERATE ENEMY CODE ===============================
  enemyTHY = enemyTHY + enemyTHVelocityYR;
  enemyTHX = enemyTHX + enemyTHVelocityXR;
}
//enemyFO
function enemyFOMovement() { //SEPERATE ENEMY CODE ===============================
  enemyFOY = enemyFOY + enemyFOVelocityYR;
  enemyFOX = enemyFOX + enemyFOVelocityXR;
}
//enemyFI
function enemyFIMovement() { //SEPERATE ENEMY CODE ===============================
  enemyFIY = enemyFIY + enemyFIVelocityYR;
  enemyFIX = enemyFIX + enemyFIVelocityXR;
}
//enemySI
function enemySIMovement() { //SEPERATE ENEMY CODE ===============================
  enemySIY = enemySIY + enemySIVelocityYR;
  enemySIX = enemySIX + enemySIVelocityXR;
}
//enemySE
function enemySEMovement() { //SEPERATE ENEMY CODE ===============================
  enemySEY = enemySEY + enemySEVelocityYR;
  enemySEX = enemySEX + enemySEVelocityXR;
}
//enemyEI
function enemyEIMovement() { //SEPERATE ENEMY CODE ===============================
  enemyEIY = enemyEIY + enemyEIVelocityYR;
  enemyEIX = enemyEIX + enemyEIVelocityXR;
}
//enemyNI
function enemyNIMovement() { //SEPERATE ENEMY CODE ===============================
  enemyNIY = enemyNIY + enemyNIVelocityYR;
  enemyNIX = enemyNIX + enemyNIVelocityXR;
}
//enemyTE
function enemyTEMovement() { //SEPERATE ENEMY CODE ===============================
  enemyTEY = enemyTEY + enemyTEVelocityYR;
  enemyTEX = enemyTEX + enemyTEVelocityXR;
}
//enemyEL
function enemyELMovement() { //SEPERATE ENEMY CODE ===============================
  enemyELY = enemyELY + enemyELVelocityYR;
  enemyELX = enemyELX + enemyELVelocityXR;
}
//enemyTWE
function enemyTWEMovement() { //SEPERATE ENEMY CODE ===============================
  enemyTWEY = enemyTWEY + enemyTWEVelocityYR;
  enemyTWEX = enemyTWEX + enemyTWEVelocityXR;
}

//enemyO
function collisionWallEnemyO() { //SEPERATE ENEMY CODE ===============================
  if(enemyOX < 0) {
    enemyOVelocityXR = -enemyOVelocityXR;
  } else if(enemyOX > canvas.width - enemyWidth) {
    enemyOVelocityXR = -enemyOVelocityXR;
  } else if(enemyOY > canvas.height - enemyHeight) {
    enemyOVelocityYR = -enemyOVelocityYR;
  } else if(enemyOY < 0) {
    enemyOVelocityYR = -enemyOVelocityYR;
  }
}

//enemyTW
function collisionWallEnemyTW() { //SEPERATE ENEMY CODE ===============================
  if(enemyTWX < 0) {
    enemyTWVelocityXR = -enemyTWVelocityXR;
  } else if(enemyTWX > canvas.width - enemyWidth) {
    enemyTWVelocityXR = -enemyTWVelocityXR;
  } else if(enemyTWY > canvas.height - enemyHeight) {
    enemyTWVelocityYR = -enemyTWVelocityYR;
  } else if(enemyTWY < 0) {
    enemyTWVelocityYR = -enemyTWVelocityYR;
  }
}

//enemyTH
function collisionWallEnemyTH() { //SEPERATE ENEMY CODE ===============================
  if(enemyTHX < 0) {
    enemyTHVelocityXR = -enemyTHVelocityXR;
  } else if(enemyTHX > canvas.width - enemyWidth) {
    enemyTHVelocityXR = -enemyTHVelocityXR;
  } else if(enemyTHY > canvas.height - enemyHeight) {
    enemyTHVelocityYR = -enemyTHVelocityYR;
  } else if(enemyTHY < 0) {
    enemyTHVelocityYR = -enemyTHVelocityYR;
  }
}

//enemyFO
function collisionWallEnemyFO() { //SEPERATE ENEMY CODE ===============================
  if(enemyFOX < 0) {
    enemyFOVelocityXR = -enemyFOVelocityXR;
  } else if(enemyFOX > canvas.width - enemyWidth) {
    enemyFOVelocityXR = -enemyFOVelocityXR;
  } else if(enemyFOY > canvas.height - enemyHeight) {
    enemyFOVelocityYR = -enemyFOVelocityYR;
  } else if(enemyFOY < 0) {
    enemyFOVelocityYR = -enemyFOVelocityYR;
  }
}

//enemyFI
function collisionWallEnemyFI() { //SEPERATE ENEMY CODE ===============================
  if(enemyFIX < 0) {
    enemyFIVelocityXR = -enemyFIVelocityXR;
  } else if(enemyFIX > canvas.width - enemyWidth) {
    enemyFIVelocityXR = -enemyFIVelocityXR;
  } else if(enemyFIY > canvas.height - enemyHeight) {
    enemyFIVelocityYR = -enemyFIVelocityYR;
  } else if(enemyFIY < 0) {
    enemyFIVelocityYR = -enemyFIVelocityYR;
  }
}

//enemySI
function collisionWallEnemySI() { //SEPERATE ENEMY CODE ===============================
  if(enemySIX < 0) {
    enemySIVelocityXR = -enemySIVelocityXR;
  } else if(enemySIX > canvas.width - enemyWidth) {
    enemySIVelocityXR = -enemySIVelocityXR;
  } else if(enemySIY > canvas.height - enemyHeight) {
    enemySIVelocityYR = -enemySIVelocityYR;
  } else if(enemySIY < 0) {
    enemySIVelocityYR = -enemySIVelocityYR;
  }
}

//enemySE
function collisionWallEnemySE() { //SEPERATE ENEMY CODE ===============================
  if(enemySEX < 0) {
    enemySEVelocityXR = -enemySEVelocityXR;
  } else if(enemySEX > canvas.width - enemyWidth) {
    enemySEVelocityXR = -enemySEVelocityXR;
  } else if(enemySEY > canvas.height - enemyHeight) {
    enemySEVelocityYR = -enemySEVelocityYR;
  } else if(enemySEY < 0) {
    enemySEVelocityYR = -enemySEVelocityYR;
  }
}

//enemyEI
function collisionWallEnemyEI() { //SEPERATE ENEMY CODE ===============================
  if(enemyEIX < 0) {
    enemyEIVelocityXR = -enemyEIVelocityXR;
  } else if(enemyEIX > canvas.width - enemyWidth) {
    enemyEIVelocityXR = -enemyEIVelocityXR;
  } else if(enemyEIY > canvas.height - enemyHeight) {
    enemyEIVelocityYR = -enemyEIVelocityYR;
  } else if(enemyEIY < 0) {
    enemyEIVelocityYR = -enemyEIVelocityYR;
  }
}

//enemyNI
function collisionWallEnemyNI() { //SEPERATE ENEMY CODE ===============================
  if(enemyNIX < 0) {
    enemyNIVelocityXR = -enemyNIVelocityXR;
  } else if(enemyNIX > canvas.width - enemyWidth) {
    enemyNIVelocityXR = -enemyNIVelocityXR;
  } else if(enemyNIY > canvas.height - enemyHeight) {
    enemyNIVelocityYR = -enemyNIVelocityYR;
  } else if(enemyNIY < 0) {
    enemyNIVelocityYR = -enemyNIVelocityYR;
  }
}

//enemyTE
function collisionWallEnemyTE() { //SEPERATE ENEMY CODE ===============================
  if(enemyTEX < 0) {
    enemyTEVelocityXR = -enemyTEVelocityXR;
  } else if(enemyTEX > canvas.width - enemyWidth) {
    enemyTEVelocityXR = -enemyTEVelocityXR;
  } else if(enemyTEY > canvas.height - enemyHeight) {
    enemyTEVelocityYR = -enemyTEVelocityYR;
  } else if(enemyTEY < 0) {
    enemyTEVelocityYR = -enemyTEVelocityYR;
  }
}

//enemyEL
function collisionWallEnemyEL() { //SEPERATE ENEMY CODE ===============================
  if(enemyELX < 0) {
    enemyELVelocityXR = -enemyELVelocityXR;
  } else if(enemyELX > canvas.width - enemyWidth) {
    enemyELVelocityXR = -enemyELVelocityXR;
  } else if(enemyELY > canvas.height - enemyHeight) {
    enemyELVelocityYR = -enemyELVelocityYR;
  } else if(enemyELY < 0) {
    enemyELVelocityYR = -enemyELVelocityYR;
  }
}

//enemyTWE
function collisionWallEnemyTWE() { //SEPERATE ENEMY CODE ===============================
  if(enemyTWEX < 0) {
    enemyTWEVelocityXR = -enemyTWEVelocityXR;
  } else if(enemyTWEX > canvas.width - enemyWidth) {
    enemyTWEVelocityXR = -enemyTWEVelocityXR;
  } else if(enemyTWEY > canvas.height - enemyHeight) {
    enemyTWEVelocityYR = -enemyTWEVelocityYR;
  } else if(enemyTWEY < 0) {
    enemyTWEVelocityYR = -enemyTWEVelocityYR;
  }
}
//Collision with player losing the game
//enemyO
function collisionPlayerEnemyO() { //SEPERATE ENEMY CODE ===============================
  if(enemyOX < playerX + playerWidth && enemyOX + enemyWidth > playerX && enemyOY < playerY + playerHeight && enemyOY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyTW
function collisionPlayerEnemyTW() { //SEPERATE ENEMY CODE ===============================
  if(enemyTWX < playerX + playerWidth && enemyTWX + enemyWidth > playerX && enemyTWY < playerY + playerHeight && enemyTWY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyTH
function collisionPlayerEnemyTH() { //SEPERATE ENEMY CODE ===============================
  if(enemyTHX < playerX + playerWidth && enemyTHX + enemyWidth > playerX && enemyTHY < playerY + playerHeight && enemyTHY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyFO
function collisionPlayerEnemyFO() { //SEPERATE ENEMY CODE ===============================
  if(enemyFOX < playerX + playerWidth && enemyFOX + enemyWidth > playerX && enemyFOY < playerY + playerHeight && enemyFOY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyFI
function collisionPlayerEnemyFI() { //SEPERATE ENEMY CODE ===============================
  if(enemyFIX < playerX + playerWidth && enemyFIX + enemyWidth > playerX && enemyFIY < playerY + playerHeight && enemyFIY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemySI
function collisionPlayerEnemySI() { //SEPERATE ENEMY CODE ===============================
  if(enemySIX < playerX + playerWidth && enemySIX + enemyWidth > playerX && enemySIY < playerY + playerHeight && enemySIY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemySE
function collisionPlayerEnemySE() { //SEPERATE ENEMY CODE ===============================
  if(enemySEX < playerX + playerWidth && enemySEX + enemyWidth > playerX && enemySEY < playerY + playerHeight && enemySEY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyEI
function collisionPlayerEnemyEI() { //SEPERATE ENEMY CODE ===============================
  if(enemyEIX < playerX + playerWidth && enemyEIX + enemyWidth > playerX && enemyEIY < playerY + playerHeight && enemyEIY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyNI
function collisionPlayerEnemyNI() { //SEPERATE ENEMY CODE ===============================
  if(enemyNIX < playerX + playerWidth && enemyNIX + enemyWidth > playerX && enemyNIY < playerY + playerHeight && enemyNIY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyTE
function collisionPlayerEnemyTE() { //SEPERATE ENEMY CODE ===============================
  if(enemyTEX < playerX + playerWidth && enemyTEX + enemyWidth > playerX && enemyTEY < playerY + playerHeight && enemyTEY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyEl
function collisionPlayerEnemyEL() { //SEPERATE ENEMY CODE ===============================
  if(enemyELX < playerX + playerWidth && enemyELX + enemyWidth > playerX && enemyELY < playerY + playerHeight && enemyELY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}

//enemyTWE
function collisionPlayerEnemyTWE() { //SEPERATE ENEMY CODE ===============================
  if(enemyTWEX < playerX + playerWidth && enemyTWEX + enemyWidth > playerX && enemySIY < playerY + playerHeight && enemyTWEY + enemyHeight > playerY) {
    startGame();
    if(playerLives > 1){
      playerLives--;
      randomVel();
    } else {
      newGame();
    }
  }
}
//Used for collision detection between player and enemies.
//ctx.rect(enemyX, enemyY, enemyWidth, enemyHeight);
//ctx.rect(playerX, playerY, playerWidth, playerHeight);


//New Game

function newGame() {
  let newGame = confirm("Game over! Thank you for playing. Press OK to start a new game.");
  if(newGame == true) {
    playerScore = 0;
    playerLives = 3;
    startGame();
  } else {
    playerScore = 0;
    playerLives = 3;
    startGame();
  }
}


//Intervals
setInterval(draw, 10);
setInterval(updateScore, 500);

//Hello
console.log("Hello World!");


//Known Bugs:
//1 - Collision with corner of canvas enemy sometimes get stuck and disappear into the canvas wall. So far only seen happen vertically 402

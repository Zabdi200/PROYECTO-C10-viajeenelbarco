var sea, ship;
var seaImg, shipImg;
var solImg;

function preload() {
    //descomentar el código para agregar la animación del barco 

    shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-1.png", "ship-2.png");

    seaImg = loadImage("sea.png");
    solImg = loadImage("sol.png");
}

function setup() {
    createCanvas(400, 400);
    background("blue");

    // Mover el fondo
    sea = createSprite(500, 200);
    sea.addImage(seaImg);
    sea.velocityX = -5;
    sea.scale = 0.3;

    ship = createSprite(130, 200, 30, 30);
    ship.addAnimation("movingShip", shipImg1);
    ship.scale = 0.20;

    sol = createSprite(330, 65)
    sol.addImage(solImg);
    sol.scale = 0.25;
}

function draw() {
    background("white");
    sea.velocityX = -2;

    if (sea.x < 10) {
        sea.x = 398;
    }
    drawSprites();
}
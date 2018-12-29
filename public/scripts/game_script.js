var context, controller, rectangle, GameLoop;

context = document.getElementById("game_board").getContext("2d");

context.canvas.height = 180;
context.canvas.width = 320;

rectangle = {
    height: 32,
    jumping: true,
    width: 32,
    x: 144, // center of the canvas
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};

controller = {

    left: false,
    right: false,
    up: false,
    keyListener: function (event) {

        // check if key is down
        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {
            case 37:// left key
                controller.left = key_state;
                break;
            case 38:// up key
                controller.up = key_state;
                break;
            case 39:// right key
                controller.right = key_state;
                break;
        }
    }
};

// game loop
GameLoop = function () {
    // make square jump
    if (controller.up && rectangle.jumping == false) {
        rectangle.y_velocity -= 20;
        rectangle.jumping = true;
    }

    // move square to the left
    if (controller.left) {
        rectangle.x_velocity -= 0.5;
    }

    // move square to the right
    if (controller.right) {
        rectangle.x_velocity += 0.5;
    }

    rectangle.y_velocity += 1.5; // gravity
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;
    rectangle.x_velocity *= 0.9; // friction
    rectangle.y_velocity *= 0.9; // friction

    // if rectangle is falling below floor line
    if (rectangle.y > 180 - 16 - 32) {
        rectangle.jumping = false;
        rectangle.y = 180 - 16 - 32;
        rectangle.y_velocity = 0;
    }

    // if rectangle is going off the left of the screen
    if (rectangle.x < -32) {
        rectangle.x = 320;
    } else if (rectangle.x > 320) { // if rectangle goes past right boundary
        rectangle.x = -32;
    }

    context.fillStyle = "#202020";
    context.fillRect(0, 0, 320, 180); // x, y, width, height
    context.fillStyle = "#0010DA";
    context.beginPath();
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
    context.strokeStyle = "#FDB927";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(320, 164);
    context.stroke();

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(GameLoop);
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(GameLoop);
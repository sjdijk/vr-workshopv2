import Enemy from "./enemy.es6";
import Player from "./player.es6";
import Keyboard from "./keyboard.es6";

const socket = io.connect('http://localhost:3000');
socket.on('connect', function() {
    socket.emit('join', 'Hello World from client');
});
socket.on('messages', function(data) {
    alert(data);
})


class Controller {
    constructor() {

        this.player = [];
        this.enemy = [];

        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.keydown = new Keyboard();
        this.player = new Player();
        this.enemy = new Enemy();

        window.addEventListener("mousemove", e => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
        this.mousePos = {
            x: 0,
            y: 0
        };

        this.loop();
    }

    loop() {
//clear the canvas
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

        if(this.player.props.x !== this.old_posX || this.player.props.y !== this.old_posY) {
            this.old_posX = this.player.props.x;
            this.old_posY = this.player.props.y;

            socket.emit('location',this.player.props.x, this.player.props.y);
            console.log(this.player.props.old_posX);
            console.log(this.player.props.old_posX);

        }


        this.enemy.props.dist.x = this.enemy.props.x - this.player.props.x;
        this.enemy.props.dist.y = this.enemy.props.y - this.player.props.y;

        //  console.log(this.player.length);
        //  console.log(this.rect.length);
        //  console.log(this.dots.length);



        this.enemy.move();
        this.enemy.draw(this.context);

        //spawn Le player
        this.player.move(this.keydown.location);
        this.player.draw(this.context);


        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

var c = new Controller();
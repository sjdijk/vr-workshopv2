/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
    function Keyboard() {
        var _this = this;

        _classCallCheck(this, Keyboard);

        this.props = {
            left: false,
            right: false,
            up: false,
            down: false
        };

        window.addEventListener("keydown", function (keyPress) {

            if (keyPress.keyCode === 37) {
                _this.props.left = true;
            }
            if (keyPress.keyCode === 38) {

                _this.props.up = true;
            }
            if (keyPress.keyCode === 39) {
                _this.props.right = true;
            }

            if (keyPress.keyCode === 40) {
                _this.props.down = true;
            }
        });

        window.addEventListener("keyup", function (keyUp) {
            if (keyUp.keyCode === 37) {
                _this.props.left = false;
            }
            if (keyUp.keyCode === 38) {
                _this.props.up = false;
            }
            if (keyUp.keyCode === 39) {
                _this.props.right = false;
            }
            if (keyUp.keyCode === 40) {
                _this.props.down = false;
            }
        });
    }

    _createClass(Keyboard, [{
        key: "location",
        get: function get() {
            return {
                left: this.props.left,
                right: this.props.right,
                up: this.props.up,
                down: this.props.down
            };
        }
    }]);

    return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __webpack_require__(0);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(x, y) {
        _classCallCheck(this, Player);

        // noinspection JSAnnotator
        this.props = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: 10,
            h: 10,
            life: 100,
            color: "rgb(255,0,0)"
        };
        this.key = new _keyboard2.default();
    }

    _createClass(Player, [{
        key: "draw",
        value: function draw(context) {
            context.fillStyle = this.props.color;
            context.fillRect(this.props.x, this.props.y, this.props.w, this.props.h);
        }
    }, {
        key: "move",
        value: function move(control) {

            if (control.left && this.props.x <= window.innerWidth - window.innerWidth) {
                this.props.x = 0;
            } else if (control.left) {
                this.props.x -= 5;
                console.log(this.props.x);
            }

            if (control.right && this.props.x >= window.innerWidth - 20) {
                this.props.x = window.innerWidth;
            } else if (control.right === true) {
                this.props.x += 5;
                console.log(this.props.x);
            }

            if (control.down && this.props.y >= window.innerHeight - 10) {
                this.props.y === window.innerHeight;
            } else if (control.down) {
                this.props.y += 5;
                console.log(this.props.x);
            }
            if (control.up && this.props.y <= window.innerHeight - window.innerHeight) {
                this.props.y === 0;
            } else if (control.up) {
                this.props.y -= 10;
            }
        }

        //   randomColor() {
        //      return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        // }

    }, {
        key: "pos1",
        get: function get() {
            return {
                x: this.props.x,
                y: this.props.y
            };
        }
    }]);

    return Player;
}();

exports.default = Player;

module.exports = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemy = __webpack_require__(3);

var _enemy2 = _interopRequireDefault(_enemy);

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _keyboard = __webpack_require__(0);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var socket = io.connect('http://localhost:3000');
socket.on('connect', function () {
        socket.emit('join', 'Hello World from client');
});
socket.on('messages', function (data) {
        alert(data);
});

var Controller = function () {
        function Controller() {
                var _this = this;

                _classCallCheck(this, Controller);

                this.player = [];
                this.enemy = [];

                this.canvas = document.querySelector("#myCanvas");
                this.context = this.canvas.getContext("2d");
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;

                this.keydown = new _keyboard2.default();
                this.player = new _player2.default();
                this.enemy = new _enemy2.default();

                window.addEventListener("mousemove", function (e) {
                        _this.mousePos.x = e.clientX;
                        _this.mousePos.y = e.clientY;
                });
                this.mousePos = {
                        x: 0,
                        y: 0
                };

                this.loop();
        }

        _createClass(Controller, [{
                key: "loop",
                value: function loop() {
                        var _this2 = this;

                        //clear the canvas
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

                        if (this.player.props.x !== this.old_posX || this.player.props.y !== this.old_posY) {
                                this.old_posX = this.player.props.x;
                                this.old_posY = this.player.props.y;

                                socket.emit('location', this.player.props.x, this.player.props.y);
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

                        window.requestAnimationFrame(function () {
                                _this2.loop();
                        });
                }
        }]);

        return Controller;
}();

var c = new Controller();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _keyboard = __webpack_require__(0);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function () {
    function Enemy(x, y) {
        _classCallCheck(this, Enemy);

        this.props = {
            x: 0,
            y: 0,
            dist: {
                x: 0,
                y: 0
            },
            drag: Math.random() * 0.1 - 1,
            speed: 1,
            w: 100,
            h: 100,
            life: 100,
            damage: 33.6,
            color: "rgb(50,0,50)"

        }, this.player = [x, y];
        this.keydown = new _keyboard2.default();
        this.player = new _player2.default();
    }

    _createClass(Enemy, [{
        key: "move",
        value: function move() {

            //  console.log("distance-X "+ this.props.dist.x);
            //console.log("distance-Y "+ this.props.dist.y);

            if (this.props.dist.x > 5) {
                this.props.x -= this.props.speed;
            } else {
                this.props.x += this.props.speed;
            }
            if (this.props.dist.y > 5) {
                this.props.y -= this.props.speed;
            } else {
                this.props.y += this.props.speed;
            }
            if (this.props.dist.y < 5) {
                this.props.y;
            }
        }
    }, {
        key: "draw",
        value: function draw(context) {
            context.fillStyle = this.props.color;
            context.fillRect(this.props.x, this.props.y, this.props.w, this.props.h);
        }
    }, {
        key: "drag",
        value: function drag() {
            math.random() * 1 - 2;
        }
    }]);

    return Enemy;
}();

exports.default = Enemy;


module.exports = Enemy;

/***/ })
/******/ ]);
console.log('You are playing Rock Storm the rockiest game on Earth');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('smiley', 'assets/images/smiley.png');
}

function create() {
  game.add.sprite(0, 0, 'smiley');
}

function update() {
}
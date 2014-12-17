console.log('You are playing Rock Storm the rockiest game on Earth');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('smiley', 'assets/images/smiley.png');
}

function create() {
  player = game.add.sprite(0, 0, 'smiley');
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.enable(player);
}

function update() {
  cursors = game.input.keyboard.createCursorKeys();
  if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;
 
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;
 
    }
  
    else 
    {
        player.body.velocity.x = 0;
 
    }
}
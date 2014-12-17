console.log('You are playing Rock Storm the rockiest game on Earth');

var game = new Phaser.Game(1200, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;
var ground;
var platforms;

function preload() {
   game.load.image('smiley', 'assets/images/smiley.png');
   game.load.image('ground', 'assets/images/ground.png');
}

function create() {
   //  We're going to be using physics, so enable the Arcade Physics system
   game.physics.startSystem(Phaser.Physics.ARCADE);

   player = game.add.sprite(0, 0, 'smiley');
   resize(player,10,10);
   platforms = game.add.group();
   platforms.enableBody = true;
   ground = platforms.create(0, game.world.height - 64, 'ground');


   game.physics.arcade.enable(player);
   ground.body.immovable = true;
   ground.scale.setTo(.2, .2);

   //  Player physics properties. Give the little guy a slight bounce.
   player.body.bounce.y = 0.2;
   player.body.gravity.y = 300;
   player.body.collideWorldBounds = true;
}

function update() {
   // Set collision with platform
   game.physics.arcade.collide(player, platforms);

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

//height and width in hundredths fractions of screen height
function resize(object,height,width){
   sHeight = game.stage.height/100*height
   player.height = sHeight
   sWidth = game.stage.height/100*width
   player.width = sWidth
}

console.log('You are playing Rock Storm the rockiest game on Earth');

var game = new Phaser.Game(960, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;
var ground;
var platforms;

function preload() {
   game.load.image('smiley', 'assets/images/smiley.png');
   game.load.image('ground', 'assets/images/ground.png');
   game.load.image('block', '/assets/images/powerup.png');
}

function create() {
   //  We're going to be using physics, so enable the Arcade Physics system
   game.physics.startSystem(Phaser.Physics.P2);
   
   player = game.add.sprite(0, 0, 'smiley');
   resize(player,10,10);
   platforms = game.add.group();
   platforms.enableBody = true;

   
   ground = platforms.create(0, game.world.height - 45, 'ground');


   ground.body.immovable = true;
   resize(ground,8,8);
   var num_ground_tiles = game.world.width / ground.width;
   console.log(num_ground_tiles);

   // Add ground tiles
   for (var i = 0; i < num_ground_tiles; i++) {
      var new_ground = platforms.create(i * ground.body.width, game.world.height - 45, 'ground');
      new_ground.body.immovable = true;
      // new_ground.scale.setTo(.2,.2);
   }

   //  Player physics properties. Give the little guy a slight bounce.

   game.physics.arcade.enable(player);
   player.body.bounce.y = 0;
   player.body.gravity.y = 500;
   player.body.collideWorldBounds = true;


   // Add Enemies
   blocks = game.add.group();
   blocks.enableBody = true;
   sendBlock();
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
   object.height = sHeight
   sWidth = game.stage.height/100*width
   object.width = sWidth
}

function sendBlock() {
   MIN_BLOCK_SPACING = 500;
   MAX_BLOCK_SPACING = 1000;

   MIN_BLOCK_SPEED = 200;
   MAX_BLOCK_SPEED = 900
   var new_block = blocks.create(0, 0 - 100, 'block');
   new_block.body.gravity.y = game.rnd.integerInRange(MIN_BLOCK_SPEED, MAX_BLOCK_SPEED);

   console.log('new block added');
   game.time.events.add(game.rnd.integerInRange(MIN_BLOCK_SPACING, MAX_BLOCK_SPACING), sendBlock);
}

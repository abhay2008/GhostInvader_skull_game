var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {
    "orderedKeys": ["250d4fc7-7b37-4674-b8e6-e4249a92433c", "5023b413-32a2-4d54-ba05-df93bbea1e76", "5c21fa29-47a6-4bbe-a7c1-71b7ee8f8d5c", "5d9a7957-21fc-47e1-b2fa-d49cc2b74221", "146303f0-8552-48c7-9caa-d5e8171c38d7", "ad237d41-d44b-4a87-b163-b6e75c5a118f"],
    "propsByKey": {
      "250d4fc7-7b37-4674-b8e6-e4249a92433c": {
        "name": "brown_cat_1_copy_1",
        "sourceUrl": "assets/api/v1/animation-library/gamelab/KPEd4TDfHOwDJL8G93hZRbxjJwmtfCbm/category_animals/brown_cat.png",
        "frameSize": {
          "x": 191,
          "y": 300
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 2,
        "version": "KPEd4TDfHOwDJL8G93hZRbxjJwmtfCbm",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 191,
          "y": 300
        },
        "rootRelativePath": "assets/api/v1/animation-library/gamelab/KPEd4TDfHOwDJL8G93hZRbxjJwmtfCbm/category_animals/brown_cat.png"
      },
      "5023b413-32a2-4d54-ba05-df93bbea1e76": {
        "name": "playerShip2_orange_1",
        "sourceUrl": "assets/api/v1/animation-library/gamelab/rBkTatNq7O_NKBPBF.4e.VShQEb5vHe6/category_vehicles/playerShip2_orange.png",
        "frameSize": {
          "x": 112,
          "y": 75
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 2,
        "version": "rBkTatNq7O_NKBPBF.4e.VShQEb5vHe6",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 112,
          "y": 75
        },
        "rootRelativePath": "assets/api/v1/animation-library/gamelab/rBkTatNq7O_NKBPBF.4e.VShQEb5vHe6/category_vehicles/playerShip2_orange.png"
      },
      "5c21fa29-47a6-4bbe-a7c1-71b7ee8f8d5c": {
        "name": "orange cat",
        "sourceUrl": "assets/api/v1/animation-library/gamelab/ShAORtTEkNmSLN0cudChoUI79B3uFbTv/category_animals/orange_cat.png",
        "frameSize": {
          "x": 166,
          "y": 300
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 2,
        "version": "ShAORtTEkNmSLN0cudChoUI79B3uFbTv",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 166,
          "y": 300
        },
        "rootRelativePath": "assets/api/v1/animation-library/gamelab/ShAORtTEkNmSLN0cudChoUI79B3uFbTv/category_animals/orange_cat.png"
      },
      "5d9a7957-21fc-47e1-b2fa-d49cc2b74221": {
        "name": "shot",
        "sourceUrl": null,
        "frameSize": {
          "x": 133,
          "y": 160
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 12,
        "version": "gWZ4L5hx03SE9.1Ml.sy1aUYIKMqBClZ",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 133,
          "y": 160
        },
        "rootRelativePath": "assets/5d9a7957-21fc-47e1-b2fa-d49cc2b74221.png"
      },
      "146303f0-8552-48c7-9caa-d5e8171c38d7": {
        "name": "skull",
        "sourceUrl": "assets/v3/animations/2REyaDxC6lKeL7be-GNPQohu341xPhQvMxg_2v_CKww/146303f0-8552-48c7-9caa-d5e8171c38d7.png",
        "frameSize": {
          "x": 411,
          "y": 406
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 4,
        "version": "GL3t0L1aYlJPjhPsVtJHYMSUz0Kiqsfo",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 411,
          "y": 406
        },
        "rootRelativePath": "assets/v3/animations/2REyaDxC6lKeL7be-GNPQohu341xPhQvMxg_2v_CKww/146303f0-8552-48c7-9caa-d5e8171c38d7.png"
      },
      "ad237d41-d44b-4a87-b163-b6e75c5a118f": {
        "name": "ghost",
        "sourceUrl": "assets/api/v1/animation-library/gamelab/OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981/category_characters/ghost.png",
        "frameSize": {
          "x": 51,
          "y": 73
        },
        "frameCount": 1,
        "looping": true,
        "frameDelay": 2,
        "version": "OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981",
        "loadedFromSource": true,
        "saved": true,
        "sourceSize": {
          "x": 51,
          "y": 73
        },
        "rootRelativePath": "assets/api/v1/animation-library/gamelab/OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981/category_characters/ghost.png"
      }
    }
  };
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
        image,
        props.frameSize.x,
        props.frameSize.y,
        frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
    // -----

    /*
    Details of the game created: 
    - When the user reaches 3 points, the Ghost drops 1 bomb. 
    - When the user reaches 6 points, the Ghost drops 2 bomb across random x values. 
    - When the user reaches 9 points, the Ghost drops 3 bomb across random x values. 
    - If the user reaches 10 points without getting destroyed by the bombs, he wins. 
    - User is given choice to reset the game after winning or after Games Over (loosing/winning).
    */


    var plane;
    var ghost;
    launchGame();

    //variable to store different state of game
    var gameState = "shoot";

    var ghostIsVisible = 0;


    // Defines skullsN
    var skull1;
    var skull2;
    var skull3;

    var shot = [];
    var j = 0;
    for (var i = 0; i < 100; i++) {
      shoot(i);
    }

    var planescore = 0;

    function draw() {

      background("black");
      fill("violet");
      textSize(16);
      text(planescore, 100, 17);
      text("your score = ", 0, 15);



      if (gameState == 'shoot') {

        if (keyDown("right")) {
          plane.x = plane.x + 8;
        }
        if (keyDown("left")) {
          plane.x = plane.x - 8;
        }
        if (keyWentDown("space")) {
          shot[j].x = plane.x;
          shot[j].y = plane.y - 40;
          shot[j].velocityY = -8;
          j = j + 1;
          playSound("assets/category_hits/8bit_splat.mp3", false);

          if (j > 98) {
            j = 0;
          }
        }
      }

      for (var i = 0; i < 100; i++) {
        if (ghost.isTouching(shot[i])) {
          ghost.x = randomNumber(35, 360);
          ghost.y = randomNumber(25, 200);
          planescore = planescore + 1;
          playSound("assets/category_animals/dinosaur.mp3", false);

        }
      }

      if (planescore >= 10) {
        fill("cyan");
        textSize(35);
        text("YOU WIN !!", 130, 300);

        gameOver();
      }

      if (keyDown("r")) {
        resetGame();
      }

      if (planescore == 0) {
        fill("blue");
        textSize(17);
        text("click space to shoot ;  score 10 points to win", 20, 180);

      }

      createEdgeSprites();
      //plane.bounceOff(edges);


      if (planescore == 3 && ghostIsVisible == 0) {

        ghostIsVisible++;
        skull1 = createSprite(plane.x, ghost.y);
        skull1.setAnimation("skull");
        skull1.scale = 0.1;
        skull1.velocityY = 7;
        playSound("assets/category_human/character_yury_laughing_1.mp3", false);

      }



      if (planescore >= 6 && ghostIsVisible == 1) {

        ghostIsVisible++;
        skull1 = '';
        skull1 = createSprite(plane.x, ghost.y);
        skull1.setAnimation("skull");
        skull1.scale = 0.1;
        skull1.velocityY = 7;
        skull2 = createSprite(randomNumber(20, 380), ghost.y);
        skull2.setAnimation("skull");
        skull2.scale = 0.1;
        skull2.velocityY = 7;
        playSound("assets/category_human/character_yury_laughing_1.mp3", false);
      }

      if (planescore >= 9 && ghostIsVisible == 2) {

        ghostIsVisible++;
        skull1 = '';
        skull1 = createSprite(plane.x, ghost.y);
        skull1.setAnimation("skull");
        skull1.scale = 0.1;
        skull1.velocityY = 7;
        skull2 = '';
        skull2 = createSprite(randomNumber(20, 180), ghost.y);
        skull2.setAnimation("skull");
        skull2.scale = 0.1;
        skull2.velocityY = 7;
        skull3 = createSprite(randomNumber(190, 380), ghost.y);
        skull3.setAnimation("skull");
        skull3.scale = 0.1;
        skull3.velocityY = 7;
        playSound("assets/category_human/character_yury_laughing_1.mp3", false);
      }


      if (planescore == 3 || planescore == 6 || planescore == 9) {
        stopSound("assets/category_animals/dinosaur.mp3", false);
      }

      if (skull1 && skull1.isTouching(plane)) {
        gameOver();
      }


      if (skull2 && skull2.isTouching(plane)) {
        gameOver();
      }


      if (skull3 && skull3.isTouching(plane)) {
        gameOver();
      }


      if (planescore > 10) {
        gameOver();
        resetGame();
      }

      if (plane.visible == false) {
        fill("white");
        textSize(12);
        text("GAME OVER !!", 125, 100);
      }


      if (gameState == 'gameover') {
        gameOver();
      }



      drawSprites();

    }

    function launchGame() {
      if (plane) {
        plane.destroy();
      }
      plane = createSprite(200, 350);
      plane.setAnimation("playerShip2_orange_1");
      plane.scale = 0.6;

      if (ghost) {
        ghost.destroy();
      }
      ghost = createSprite(200, 100);
      ghost.setAnimation("ghost");
      ghost.scale = 0.7;
    }


    function shoot(i) {
      shot[i] = createSprite(500, 200);
      shot[i].setAnimation("shot");
      shot[i].scale = 0.05;
    }

    function gameOver() {
      gameState = 'gameover';
      fill("pink");
      textSize(40);
      text("GAME OVER !!", 50, 100);
      plane.destroy();
      fill("pink");
      textSize(20);
      text("click r to restart", 150, 150);
    }

    function resetGame() {
      gameState = 'shoot';
      planescore = 0;
      ghostIsVisible = 0;
      launchGame();
    }







    // -----
    try {
      window.draw = draw;
    } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) {
          preload();
        }
        break;
      case 'setup':
        if (setup !== window.setup) {
          setup();
        }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
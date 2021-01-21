class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y = 500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            if(index===player.index){
                fill(0)
                textSize(20)
                text(allPlayers[plr].name,x-25,y+25)
                
            }
            push()
            fill("pink")
            textSize(25)
            text("PLAYER 1: "+ player1.score,50,50)
            text("PLAYER 2: "+ player2.score,50,100)
            pop()

        }


        // Give movements for the players using arrow keys
             if(keyIsDown(LEFT_ARROW) && player.index!=null){
                 player.distance+=10
                 player.update()
             }
             if(keyIsDown(RIGHT_ARROW) && player.index!=null){
                 player.distance-=10
                 player.update()
             }

        // Create and spawn fruits randomly
         if(frameCount%50===0){
             fruits=createSprite(random(100,1000),0,100,100)
             fruits.velocityY=6;
             var ran=Math.round(random(5,1))
             switch(ran){
                 case 1: fruits.addImage("fruit1",fruit1_img);
                 break;
                 case 2: fruits.addImage("fruit1",fruit2_img);
                 break;
                 case 3: fruits.addImage("fruit1",fruit3_img);
                 break;
                 case 4: fruits.addImage("fruit1",fruit4_img);
                 break;
                 case 5: fruits.addImage("fruit1",fruit5_img);
                 break;
             }
             fruitGroup.add(fruits)
         }
        //destroying the fruits
        if(player.index!=null){
            for(var i=0; i<fruitGroup.length; i++){
                if(fruitGroup.get(i).isTouching(players)){
                    fruitGroup.get(i).destroy()
                    player.score+=1
                    player.update()
                }
            }
        }

        

        if(player.score>=10){
            this.end()
        }
    }

    end(){
        game.update(2)
        clear()
        push()
        fill(0)
        textFont("Times New Roman")
      textSize(26)
      text("GAME OVER",450,200)
      textSize(20)
      text("CONGRATS! YOU HAVE COLLECTED THE FRUITS",300,300)
      pop()
    }
}
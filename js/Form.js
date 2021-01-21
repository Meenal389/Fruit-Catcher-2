class Form{
    constructor(){
       this.input = createInput("Please Enter Your Name");
       this.button = createButton('Play');
       this.reset= createButton('RESET')
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(550, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(670,520);
        this.input.style('width', '300px');
        this.input.style('height', '50px');
        this.input.style('background', 'lightblue');
        this.button.position(720,600);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(1150,150)
        this.reset.style('width','150px')
        this.reset.style('height','40px')
        this.reset.style('background','cyan')

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,500);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            
        })

    }
}
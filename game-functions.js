var canvas = document.getElementById("game");
var c  = canvas.getContext('2d');


const 	GAME_WIDTH = 800;
const   GAME_HEIGHT = 600;
var score = 0;
var life = 3;
var slider=0;
var greenballxpos = 0;
var greenballypos = 0;
var blueballxpos = 0;
var blueballypos = 0;
var redballxpos = 0;
var redballypos = 0;
var blackballxpos= 0;
var blackballypos= 0;

//  Classes
class Game {
	constructor(gamewidth,gameheight){
		this.gamewidth = gamewidth;
		this.gameheight = gameheight;
	}
	start(){
		this.stick =  new Stick(this);
		this.blackball = new Blackball(this);
		this.greenball = new Greenball(this);
		this.redball = new Redball(this);
		this.blueball = new Blueball(this)

		var blackballs = [];
	


		this.gameObject = [
			this.blackball ,
			this.greenball,
			this.redball,
			this.blueball,
			this.stick,
			
		];


		new InputHandler(this.stick);

	}
	draw(c){
	
		this.gameObject.forEach(object => object.draw(c));	
		

	}
	update(change){
	
		this.gameObject.forEach(object => object.update(change));	
	
	}

}


class Blackball{
	constructor(game){
	this.image3 = document.getElementById('blackball')
	this.ballxpos = 800;
	this.ballypos = 100;
	 //add code here

	}

	draw(c){

	 //add code here
	 blackballxpos = this.ballxpos
	 blackballypos = this.ballypos
	 c.drawImage(this.image3, this.ballxpos, this.ballypos,20,20)
		
	}

	update(){
		// add code here
		//var image = document.getElementById("blackball");
	//	c.drawImage(image3, blackballxpos, blackballypos,20,20);
		this.ballxpos-=10;
		if(this.ballxpos<0){
			this.ballxpos=800
			this.ballypos = Math.floor(Math.random() * 600);
		}
		}

	}


// Greeen ball


class Greenball{
	constructor(game){
		this.image3 = document.getElementById('greenball')
		this.ballxpos = 800;
		this.ballypos = 100;
		 //add code here
	
		}
	
		draw(c){
			greenballxpos = this.ballxpos
			greenballypos = this.ballypos
		 //add code here
		 c.drawImage(this.image3, this.ballxpos, this.ballypos,20,20)
			
		}
	
		update(){
			// add code here
			//var image = document.getElementById("blackball");
		//	c.drawImage(image3, blackballxpos, blackballypos,20,20);
			this.ballxpos-=20;
			if(this.ballxpos<0){
				this.ballxpos=800
				this.ballypos = Math.floor(Math.random() * 500);
			}
			}
	
}



class Redball{
	constructor(game){
		this.image3 = document.getElementById('redball')
		this.ballxpos = 800;
		this.ballypos = 100;
		 //add code here
	
		}
	
		draw(c){
	
		 //add code here
		 redballxpos = this.ballxpos
		 redballypos = this.ballypos
		 c.drawImage(this.image3, this.ballxpos, this.ballypos,20,20)
			
		}
	
		update(){
			// add code here
			//var image = document.getElementById("blackball");
		//	c.drawImage(image3, blackballxpos, blackballypos,20,20);
			this.ballxpos-=20;
			if(this.ballxpos<0){
				this.ballxpos=800
				this.ballypos = Math.floor(Math.random() * 500);
			}
			}
	
}
// blue ball

class Blueball{
	constructor(game){
		this.image3 = document.getElementById('blueball')
		this.ballxpos = 800;
		this.ballypos = 100;
		 //add code here
	
		}
	
		draw(c){
			blueballxpos = this.ballxpos
			blueballypos = this.ballypos
		 //add code here
		 c.drawImage(this.image3, this.ballxpos, this.ballypos,20,20)
			
		}
	
		update(){
			// add code here
			//var image = document.getElementById("blackball");
		//	c.drawImage(image3, blackballxpos, blackballypos,20,20);
			this.ballxpos-=7;
			if(this.ballxpos<0){
				this.ballxpos=800
				this.ballypos = Math.floor(Math.random() * 500);
			}
			}
	
}


class Stick{
    constructor(game){
	 // add code here
	 this.image = document.getElementById('slider')
	 this.stickpos = 0
	 
	}
	
	moveUp(){
		//add code here
		if(this.stickpos-60>=0) 
		this.stickpos-=60;
	
	}
	moveDown(){
		// add code here
		if(this.stickpos+60<=590)
		this.stickpos+=60;
	}

    draw(c){
		// add code here
		slider = this.stickpos

		c.drawImage(this.image, 0, this.stickpos,20,80)
	
	}
	update(change) {
	  // add code here
	  //c.fillRect(20,stickpos,18,70);
	 // c.fillStyle = "yellow";
	}
}

class InputHandler{
	constructor(stick){
	document.addEventListener('keyup', (event) =>{
	
		switch(event.keyCode){
			case 38:
				stick.moveUp();
				break;
			case 40:
				stick.moveDown();
				break;
		}
	});
	}
}

// Classes end

//  Raw code
function collision(c){
	var ballxpos = [redballxpos,blueballxpos,blackballxpos,greenballxpos];
	var ballypos = [redballypos,blueballypos,blackballypos,greenballypos];
	slider = parseInt(slider)
	slider2 = slider+80
	c.font = "20px Georgia";
	c.fillText("score:"+" "+score,700,30)
	//score=new CompositionEvent("30px","consolas","black", 280, 40, "text")
	c.font = "20px Georgia";
	c.fillText("life"+" "+life,10,30)
	//console.log(slider+"----"+slider2)
	for(var i=0;i<4;i++)
		if(ballxpos[i]<=15){
			if(ballypos[i]>slider && ballypos[i]<slider2){
				if(i==0){
					//alert("Life Lost")
					life = life-1
					if(life==0){ 
						alert("You lose, Score ="+score);
						window.location.reload();

					}
					//console.log(slider+">>"+slider+80+">>"+ballypos[i])
					//alert("Hit,Reduce Life");
				}
				else{
					score+=5
					//console.log(score)
				}
			}
		}
}
var previous =0;

var game = new Game(GAME_WIDTH,GAME_HEIGHT);
game.start();
//var x = game.gameObject.blackball.ballxpos;
function gameLoop(position){
	var change = position - previous;
	previous = position;
	c.clearRect(0,0,innerWidth,innerHeight);
	
	game.draw(c);
	collision(c);
	//console.log(slider)
	game.update(change);
	

	requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


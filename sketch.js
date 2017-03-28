var t1;
var t2;
var c1;
var c2;
var blocks=[];
var wall;
var p1;
var p2;
var p3;
var score;
var invincible = true;
var c;
var alpha;
var up;
var pwups = [];
function setup() {
  createCanvas(window.innerWidth-50,window.innerHeight-150);
  // frameRate(20);
setInterval(function(){
if(pwups.length<2){
	pwups.push(new PowerUps);
}
},5000);
  t1 = new Tron();
  t2 = new Tron();
  t3 = new Tron();
alpha = 0;
	c = color(255,215,0);
//  c1 =color (255,100,100);
  c1 =color (255,70,0);
  c2 =color (100,200,160);
  c3 =color (135,206,235);
  wall = new Wall();
	p1 =0;
	p2 =0;
	p3 =0;
score = createP("Deaths- Red : "+String(p1)+" Green : "+String(p2)+" Blue : "+String(p3)+"FPS: "+frameRate());
  for(var i =0;i<100;i++){
    blocks.push(new Block());
    }
	setTimeout(function(){ invincible = false
},3000);
}
function resetGame(){
invincible = true;
t1 = new Tron();
  t2 = new Tron();
  t3 = new Tron();
  blocks =[];
pwups=[];
  for(var i =0;i<100;i++){
    blocks.push(new Block());
   }  
fill(0);
setTimeout(function(){ invincible = false
},3000);
updateScore();
loop();

}
function updateScore(){
score.remove();
score = createP("Deaths- Red : "+String(p1)+" Green : "+String(p2)+" Blue : "+String(p3)+"FPS: "+frameRate());
}
function mousePressed(){
  // t1.total++;
  // t2.total++;
  resetGame();
}

function draw() {
  if(t1.total <10){
    t1.total++;
    t2.total++;
t3.total++;
  }
	
//textSize(32);
 //textAlign(CENTER, BASELINE);
//text(s , 920, 920);

  // console.log(t1.xspeed);
  // console.log(t1.acc);

  background(51);

  t1.update();
  t1.show(c1);
  t2.update();
  t2.show(c2);
t3.update();
  t3.show(c3);
	
if(!invincible){  
if(t1.hits(t2)){
    t1.colorize(100);
	p1++;
    noLoop();
    console.log("Game Over! T2 Wins!");
  }
if(t1.hits(t3)){
    t1.colorize(100);
    noLoop();
	p1++;
    console.log("Game Over! T2 Wins!");
  }
if(t3.hits(t2)){
    t3.colorize(100);
    noLoop();
p3++;
    console.log("Game Over! T2 Wins!");
  }
if(t3.hits(t1)){
    t3.colorize(100);
    noLoop();
p3++;
    console.log("Game Over! T2 Wins!");
  }
  if(t2.hits(t1)){
    t2.colorize(100);
    noLoop();
p2++;    
console.log("Game Over! T1 Wins!");
  }
if(t2.hits(t3)){
    t2.colorize(100);
    noLoop();
p2++;
    console.log("Game Over! T1 Wins!");
  }
for(var i =0; i<blocks.length;i++){
    //blocks[i].show();
    if(blocks[i].hits(t1)){
      t1.colorize(100);
p1++;
      console.log("P1 Hit! GG");
      noLoop();
    }
    if(blocks[i].hits(t2)){
      t2.colorize(100);
p2++;
      console.log("P2 Hit! GG");
      noLoop();
    }
    if(blocks[i].hits(t3)){
      t3.colorize(100);
p3++;
      console.log("P2 Hit! GG");
     noLoop();
    }
  }
}else{
 if(alpha>=255){
    up=false
  }else if(alpha<=0){
    up=true;
  }
  if(up){
    alpha+=10; 
  }else{
    alpha-=10;
  }
	c = color(255,215,0,alpha);
	fill(c);
	rect(0,0,width,height);
}
  for(var i =0; i<blocks.length;i++){
    blocks[i].show();
}

for(var i = pwups.length-1;i>=0;i--){
	pwups[i].show();
	if(pwups[i].hits(t1)){
if(pwups[i].type ==1){
	t1.boost();
}
if(pwups[i].type ==2){
	p1-=1;
	updateScore();
}
}	if(pwups[i].hits(t2)){
	if(pwups[i].type ==1){
	t2.boost();
}
if(pwups[i].type ==2){
	p2 -= 1;
	updateScore();
}
}		if(pwups[i].hits(t3)){
	if(pwups[i].type ==1){
	t3.boost();
}
if(pwups[i].type ==2){
	p3 -= 1;
	updateScore();
}
}
if(pwups[i].hits(t1)||pwups[i].hits(t3)||pwups[i].hits(t2)){
	pwups.splice(i,1);
}		
}
  if(wall.hit(t1)){
    t1.colorize(100);
    console.log("P1 Hit! GG");
    noLoop();
p1++;
  }
if(wall.hit(t3)){
    t3.colorize(100);
    console.log("P1 Hit! GG");
    noLoop();
p3++;
  }

  if(wall.hit(t2)){
    t2.colorize(100);
    console.log("P2 Hit! GG");
    noLoop();
p2++;
  }
    wall.show();
}
function keyReleased(){
  if(keyCode == 32){
    //t1.normalize();
  }else if(keyCode == 69){
	//t2.normalize();
}
}
function keyPressed(){
// console.log(keyCode);
  if(keyCode == UP_ARROW){
    t1.dir(0,-1);
  }else if(keyCode == DOWN_ARROW){
    t1.dir(0,1);
  }else if(keyCode == RIGHT_ARROW){
    t1.dir(1,0);
  }else if(keyCode == LEFT_ARROW){
    t1.dir(-1,0);
  }else if(keyCode == 16){
    console.log("BOOST!");
    //t1.boost();
  }
  if(keyCode == 87){
    t2.dir(0,-1);
  }else if(keyCode == 83){
    t2.dir(0,1);
  }else if(keyCode == 68){
    t2.dir(1,0);
  }else if(keyCode == 65){
    t2.dir(-1,0);
  }else if(keyCode == 69){
    console.log("BOOST!");
    //t2.boost();
  }
if(keyCode == 104){
    t3.dir(0,-1);
  }else if(keyCode == 101){
    t3.dir(0,1);
  }else if(keyCode == 102){
    t3.dir(1,0);
  }else if(keyCode == 100){
    t3.dir(-1,0);
  }else if(keyCode == 107){
    console.log("BOOST!");
    //t3.boost();
  }
if(keyCode == 13){
resetGame();
}

}

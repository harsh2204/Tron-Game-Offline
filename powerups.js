
function PowerUps() {
    this.x = random(20, width-20);
    this.y = random(20, height-20);
    this.size = 10;
	this.type;
	if(random(0,100)<60){
	this.type = 1
}else{
	this.type = 2;
}
    this.show = function() {    
	if(this.type == 1){
		fill(50,205,50);		
	}else if(this.type == 2){
		fill(149, 51, 206);		
	}
      rect(this.x, this.y, this.size, this.size);
    }
    this.hits = function(other) {
            var d = dist(this.x, this.y, other.x, other.y);
            if (d < this.size) {
                // console.log("Hit!");
                return true;
        }
    }

}

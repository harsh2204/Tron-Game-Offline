function Wall() {

    this.show = function() {
        fill(214, 142, 255);
        noStroke();
        rect(0, 0, width, 10);
        rect(0, 0, 10,height);
        rect(0, height-10, width, 10);
        rect(width-10, 0, 10, height);
    }
    this.hit = function(other) {
        if (other.x >= width-10) {
            return true;
        }
        if (other.y >= height-10) {
            return true;
        }
        if (other.y <= 10) {
            return true;
        }
        if (other.x <= 10) {
            return true;
        }
    }
}

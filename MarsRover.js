var MarsRover = function (plateau_x, plateau_y, position_x, position_y, direction) {
  this.plateau_x = plateau_x;
  this.plateau_y = plateau_y;
  this.position_x = position_x;
  this.position_y = position_y;
  this.direction = direction;
  this.directions = ['N', 'E', 'S', 'W']
}

MarsRover.prototype.move = function(control_sequence) {
  for(control_char of control_sequence) {
    console.log(control_char)
    if(control_char === 'M') {
      try {
        switch(this.direction) {
          case 'N' :
          this.position_y += 1;
          break;
          case 'S' :
          this.position_y -=1;
          break;
          case 'E' :
          this.position_x +=1;
          break;
          case 'W' :
          this.position_x -=1;
          break;
        }
        this.checkPlateauBoundary(this.plateau_x, this.plateau_y)
      }
      catch(e) {
        console.log(e.message);
      };
    }
    else {
      this.direction = this.computeNewDirection(control_char);
    }
  }
}

MarsRover.prototype.computeNewDirection = function(moveDirection) {
  var indexOfCurrentDirection = this.directions.indexOf(this.direction);
  switch(moveDirection) {
    case 'L' :
      if(indexOfCurrentDirection === 0) {
        return this.directions[3];
      }
      else {
        return this.directions[indexOfCurrentDirection - 1];
      }
    case 'R' :
      if(indexOfCurrentDirection === 3) {
        return this.directions[0];
      }
      else {
        return this.directions[indexOfCurrentDirection + 1];
      }
  }
}

MarsRover.prototype.returnPosition = function () {
    return this.position_x + " " + this.position_y + " " + this.direction;
};

MarsRover.prototype.checkPlateauBoundary = function(x, y) {
  if(this.position_x > this.plateau_x || this.position_x < 0 || this.position_y > this.plateau_y || this.plateau_y < 0) {
    throw new Error("Cannot move further");
  }
}
module.exports = MarsRover;

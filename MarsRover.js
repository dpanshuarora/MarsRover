function MarsRover(plateau_x, plateau_y, position_x, position_y, direction, control_sequence) {
  this.plateau_x = plateau_x;
  this.plateau_y = plateau_y;
  this.position_x = position_x;
  this.position_y = position_y;
  this.direction = direction;
  this.control_sequence = control_sequence;

  const directions = ['N', 'E', 'S', 'W']

  function move() {
    for(control_char of this.control_sequence) {
      if(control_char === 'M') {
        try {
        switch(this.direction) {
          case 'N' :
          this.plateau_y++;
          case 'S' :
          this.plateau_y--;
          case 'E' :
          this.plateau_x++;
          case 'W' :
          this.plateau_x--;
        }
        checkPlateauBoundary(this.plateau_x, this.plateau_y)
      }
      catch(e) {
        alert(e.message());
      };
    }
    else {
      this.direction = computeNewDirection(control_char);
    }
  }
}

  function computeNewDirection(moveDirection) {
    indexOfCurrentDirection = directions.findIndex(moveDirection);
    switch(moveDirection) {
      case 'L' :
        if(indexOfCurrentDirection === 0) {
          return directions[3];
        }
        else {
          return directions[indexOfCurrentDirection - 1];
        }
      case 'R' :
        if(indexOfCurrentDirection === 3) {
          return directions[0];
        }
        else {
          return directions[indexOfCurrentDirection + 1];
        }
    }
  }

  function checkPlateauBoundary(x, y) {
    throw "Cannot move further";
  }

}

MarsRover(5, 5, 1, 2, 'N', 'LMLMLMLMM');

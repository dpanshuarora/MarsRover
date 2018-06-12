var MarsRover = require('./MarsRover');
  describe('Check MarsRover Moves correctly.', function () {

    it('can move according to control sequence LMLMLMLMM', function () {
      var marsRover = new MarsRover(5,5,1,2,'N');
      marsRover.computeNewDirection("LMLMLMLMM");
      expect(marsRover.returnPosition()).toEqual("1 3 N");
    });

    it('can move according to control sequence MMRMMRMRRM', function () {
      var marsRover = new MarsRover(5,5,3,3,'E');
      marsRover.computeNewDirection("MMRMMRMRRM");
      expect(marsRover.returnPosition()).toEqual("5 1 E");
    });

    it('can move left', function () {
      var marsRover = new MarsRover(5,5,1,2,'S');
      marsRover.computeNewDirection("L");
      expect(marsRover.returnPosition()).toEqual("1 2 E");
    });

    it('can move right', function () {
      var marsRover = new MarsRover(5,6,1,2,'S');
      marsRover.computeNewDirection("R");
      expect(marsRover.returnPosition()).toEqual("1 2 W");
    });

    it('can move north', function () {
      var marsRover = new MarsRover(5,5,1,1,'N');
      marsRover.computeNewDirection("M");
      expect(marsRover.returnPosition()).toEqual("1 2 N");
    });

    it('can move south', function () {
      var marsRover = new MarsRover(5,5,2,2,'S');
      marsRover.computeNewDirection("M");
      expect(marsRover.returnPosition()).toEqual("2 1 S");
    });

    it('can move east', function () {
      var marsRover = new MarsRover(5,5,2,2,'E');
      marsRover.computeNewDirection("M");
      expect(marsRover.returnPosition()).toEqual("3 2 E");
    });

    it('can move west', function () {
      var marsRover = new MarsRover(5,5,3,2,'W');
      marsRover.computeNewDirection("M");
      expect(marsRover.returnPosition()).toEqual("2 2 W");
    });
  });
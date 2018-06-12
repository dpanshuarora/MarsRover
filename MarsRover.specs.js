var MarsRover = require('./MarsRover');
  describe('Check MarsRover Moves correctly.', function () {

    it('can move according to control sequence LMLMLMLMM', function () {
      var marsRover = new MarsRover(5,5,1,2,'N');
      marsRover.move("LMLMLMLMM");
      expect(marsRover.returnPosition()).toEqual("1 3 N");
    });

    it('can move according to control sequence MMRMMRMRRM', function () {
      var marsRover = new MarsRover(5,5,3,3,'E');
      marsRover.move("MMRMMRMRRM");
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
      marsRover.move("M");
      expect(marsRover.returnPosition()).toEqual("1 2 N");
    });

    it('can move south', function () {
      var marsRover = new MarsRover(5,5,2,2,'S');
      marsRover.move("M");
      expect(marsRover.returnPosition()).toEqual("2 1 S");
    });

    it('can move east', function () {
      var marsRover = new MarsRover(5,5,2,2,'E');
      marsRover.move("M");
      expect(marsRover.returnPosition()).toEqual("3 2 E");
    });

    it('can move west', function () {
      var marsRover = new MarsRover(5,5,3,2,'W');
      marsRover.move("M");
      expect(marsRover.returnPosition()).toEqual("2 2 W");
    });

    it('can return position correctly', function () {
      var marsRover = new MarsRover(5,5,3,2,'W');
      expect(marsRover.returnPosition()).toEqual("3 2 W");
    });

    it('throws error if mars rover moves out of given plateau boundaries', function () {
      var marsRover = new MarsRover(5,5,5,5,'E');
      expect(function () { marsRover.move("M"); }).toThrow(
        new Error("Cannot move further"));
    });



  });

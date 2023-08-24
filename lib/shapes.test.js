const Shapes = require('./shapes.js');
const { Triangle, Square, Circle } = require('./shapes.js');


describe('Triangle', () => {
  
  describe('Triangle', () => {
    it('should test if shape color match', () => {
      const shapes = new Triangle("black","FDS","yellow");
      expect(shapes.color).toBe("black");
    });
  });
});

describe('Square', () => {
    
    describe('Square', () => {
      it('should test if 3 characters text match', () => {
        const shapes = new Square("black","FDS","yellow");
        expect(shapes.text).toBe("FDS");
      });
    });
  });

  describe('Circle', () => {
    
    describe('Circle', () => {
      it('should test if textColor match', () => {
        const shapes = new Circle("black","FDS","yellow");
        expect(shapes.textColor).toBe("yellow");
      });
    });
  });
const Shapes = require('./shapes.js');
const { Triangle, Square, Circle } = require('./shapes.js');


describe('Triangle', () => {
  
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const shapes = new Triangle("blue","bbb","green");
      expect(shapes.color).toBe(`blue`);
    });
  });
});

describe('Square', () => {
    
    describe('sum', () => {
      it('should take two numbers and add them together', () => {
        const shapes = new Square("blue","bbb","green");
        expect(shapes.text).toBe(`bbb`);
      });
    });
  });

  describe('Circle', () => {
    
    describe('sum', () => {
      it('should take two numbers and add them together', () => {
        const shapes = new Circle("blue","bbb","green");
        expect(shapes.textColor).toBe(`green`);
      });
    });
  });
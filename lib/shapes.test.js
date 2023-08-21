const Shapes = require('../shapes.js');


describe('Triangle', () => {
  
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const shapes = new Shapes();
      expect(shapes.sum(2, 2)).toEqual(total);
    });
  });
});

describe('Square', () => {
    
    describe('sum', () => {
      it('should take two numbers and add them together', () => {
        const total = 4;
        const shapes = new Shapes();
        expect(shapes.sum(2, 2)).toEqual(total);
      });
    });
  });

  describe('Circle', () => {
    
    describe('sum', () => {
      it('should take two numbers and add them together', () => {
        const total = 4;
        const shapes = new Shapes();
        expect(shapes.sum(2, 2)).toEqual(total);
      });
    });
  });
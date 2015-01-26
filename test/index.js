var zeroes = require('..');

describe('zeroes(dimensions)', function () {

  it('should create an empty array', function () {
    zeroes(0).should.eql([]);
  });

  it('should create one dimensional array of zeroes', function () {
    zeroes(4).should.eql([0, 0, 0, 0]);
  });

  it('should create a two dimensional array of zeroes', function () {
    zeroes([4, 2]).should.eql([ [0, 0], [0, 0], [0, 0], [0, 0] ]);
  });

  it('should create a three dimensional array of zeroes', function () {
    zeroes([4, 3, 2]).should.eql([
      [ [0, 0], [0, 0], [0, 0] ],
      [ [0, 0], [0, 0], [0, 0] ],
      [ [0, 0], [0, 0], [0, 0] ],
      [ [0, 0], [0, 0], [0, 0] ]
    ]);
  });

  it('should allow alternate initial value numbers', function () {
    zeroes(4, 1).should.eql([1, 1, 1, 1]);
  });

  it('should allow alternate initial value objects', function () {
    zeroes(4, { a : 1 }).should.eql([{ a : 1 }, { a : 1 }, { a : 1 }, { a : 1 }]);
  });

  it('should allow alternate values created by a function', function () {
    var x = 0;

    function value() {
      return ++x;
    }

    zeroes(5, value).should.eql([ 1, 2, 3, 4, 5 ]);
  });

  it('should even set a custom initialValue with a matrix', function () {
    zeroes([ 2, 2 ], 'x').should.eql([
      ['x', 'x'],
      ['x', 'x']
    ]);
  })

  it('should use a custom fn initialValue with a matrix', function () {
    var array = zeroes([ 2, 2 ], function () {
      return 'hello'
    });

    array.should.eql([
      ['hello', 'hello'],
      ['hello', 'hello']
    ]);
  });

  it('should pass the index(es) to an fn initialValue', function () {
    var array = zeroes([ 2, 3 ], function (x, y) {
      return String.fromCharCode(97 + x) + (y + 1);
    });

    array.should.eql([
      ['a1', 'a2', 'a3'],
      ['b1', 'b2', 'b3']
    ]);
  });
});

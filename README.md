# zeroes

Zeroes array utility

## Installation

    $ component install reinpk/zeroes

## API

### zeroes(dimensions)

Create an array full of zeroes:

```js
zeroes(5); // returns [0, 0, 0, 0, 0]
```

Create a matrix full of zeroes:

```js
zeroes([2, 2]); // returns [ [0, 0], [0, 0] ]
zeroes([2, 2, 2]); // returns [ [ [0, 0], [0, 0] ], [ [0, 0], [0, 0] ]
```

You can also pass in an alternate initial value, if you desire:

```js
zeroes(3, 1); // returns [1, 1, 1]
zeroes(3, { a : 1 }); // returns [{ a : 1 }, { a : 1 }, { a : 1 }]
```

A function can also be used for the `initialValue`, it will receive the
coordinates as arguments. (the number of args will match the number of
numbers supplied as `dimensions`)

```js
zeroes([ 2, 2 ], function (x, y) {
  return String.fromCharCode(97 + x) + (y + 1);
});

// [
//   [ 'a1', 'a2' ],
//   [ 'b1', 'b2' ]
// ]
```


## License

    WWWWWW||WWWWWW
     W W W||W W W
          ||
        ( OO )__________
         /  |           \
        /o o|    MIT     \
        \___/||_||__||_|| *
             || ||  || ||
            _||_|| _||_||
           (__|__|(__|__|

Copyright (C) 2013 Peter Reinhardt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

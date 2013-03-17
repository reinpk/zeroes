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

## License

MIT

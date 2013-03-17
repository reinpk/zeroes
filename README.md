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

## License

MIT

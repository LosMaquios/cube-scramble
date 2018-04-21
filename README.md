# Cube Scramble

  Blazing fast cube scramble by using a [finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) based algorithm.

## Usage

```js
const moves = [
  'U', 'R', 'D',
  'L', 'F', 'B'
]

scramble(moves)

/**
 * Hypothetical result:
 *
 * ["F'", "D'", "U2", "F2", "L2", "B2", "L", "B", "F'", "D", "L'", "B2", "D'", "L2", "B2", "D2", "F", "R'", "U'", "F2"]
 */
```

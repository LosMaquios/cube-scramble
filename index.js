/**
 * Default `scramble` options
 *
 * @prop {Array.<string>} variations - An array of move variations
 * @prop {number} length - Result scramble length
 */
const defaults = {
  variations: ['\'', '2', ''],
  length: 20
}

/**
 * Scramble input moves
 *
 * @param {Array.<string>} moves
 * @param {Object} [options]
 * @param {Array.<string>} [options.variations]
 *
 * @return {Array.<string>}
 */
export function scramble (moves, options) {
  options = Object.assign({}, options, defaults)

  const scrambled = []

  let next = random(moves)
  let cycle = options.length

  const states = finite(moves)

  while (cycle--) {
    scrambled.push(next + random(options.variations))

    next = random(states[next])
  }

  return scrambled
}

/**
 * Create a new map of states
 *
 * @param {Array.<string>} moves
 *
 * @return {Object}
 */
function finite (moves) {
  const map = {}

  moves.forEach(move => {
    map[move] = moves.filter(_move => _move !== move)
  })

  return map
}

/**
 * Get random item from a given `array`
 *
 * @param {Array.<*>} array
 *
 * @return {*}
 */
function random (array) {
  return array[Math.floor(Math.random() * array.length)]
}

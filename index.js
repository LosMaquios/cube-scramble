/**
 * Default `scramble` options
 *
 * @prop {Array.<string>} variations - Move variations
 * @prop {number} length - Result scramble length
 */
const defaults = {
  variations: ['\'', '2', ''],
  length: 20
}

/**
 * Scramble input moves
 *
 * @param {Array.<string>} moves - Move notations
 * @param {Object} [options]
 * @param {Array.<string>} [options.variations]
 * @param {number} [options.length]
 *
 * @return {Array.<string>}
 */
export function scramble (moves, options) {
  options = Object.assign({}, defaults, options)

  const scrambled = []

  let next = random(moves)
  let cycle = options.length

  const table = generateTable(moves)

  do {
    scrambled.push(next + random(options.variations))
  } while (--cycle && (next = random(table[next])))

  return scrambled
}

/**
 * Generate a new state transition table
 *
 * @param {Array.<string>} moves
 *
 * @return {Object}
 */
function generateTable (moves) {
  const table = {}

  moves.forEach(move => {
    table[move] = moves.filter(_move => _move !== move)
  })

  return table
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

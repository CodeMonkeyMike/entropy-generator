/**
 * Author: Mike Zipf
 *
 * What was done:
 *  Entropy was generated through a time delta of keypresses
 *  Mersenne Twister was used to generate a Pseudo Random Number using the Keypress Entropy
 * What else could be done:
 *  Add additional sources of entropy such as, mouse movement or network traffic monitering
 *  Calculate randomness of entropy and block number generation on insuficent entropy
 *  Allow multiple numbers to be generated from the entropy created
 *
 * Note: No external libraries needed, Node v8.x.x used in testing
 *
 * Usage:
 *  In project root `node index.js`
 *  Randomly type on keyoard
 *  Hit the return (enter) key
 */

const readline = require('readline');
const MersenneTwister = require('./mtwister')

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const OUTPUT_SIZE_BITS = 4096;
var arr = [];

process.stdin.on('keypress', (str, key) => {
  console.log(str)
  // Timestamp at keypress
  arr.push(Date.now())

  // Return is the exit code that will also generate the random number
  if (key.name === 'return') {
    // Key press time deltas
    var deltas = arr.map((v, i, a) => (i > 0) ? v - a[i-1] : 0)

    // Pseudo random number generator seeded with kepress entropy
    var generator = new MersenneTwister(deltas)
    // Create PRN [0, 1)
    var foo = generator.random()
    console.log(foo)

    process.exit()
  }
})

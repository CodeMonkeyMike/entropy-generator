# entropy-generator
Generate entropy for random number generation

What was done:
 *  Entropy was generated through a time delta of keypresses
 *  Mersenne Twister was used to generate a Pseudo Random Number using the Keypress Entropy

What else could be done:
 *  Add additional sources of entropy such as, mouse movement or network traffic monitering
 *  Calculate randomness of entropy and block number generation on insuficent entropy
 *  Allow multiple numbers to be generated from the entropy created

Note: No external libraries needed, Node v8.x.x used in testing

Usage:
 * In project root `node index.js`
 * Randomly type on keyoard
 * Hit the return (enter) key

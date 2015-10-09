/**
 * Default config suggested by eslint docs:
 * http://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs
 *
 * Duplicate of ./strict.js which allows us to extend with `patreon`
 * while also supporting `patreon/strict` if we want to be explicit.
 */
module.exports = require('./eslintrc.json')

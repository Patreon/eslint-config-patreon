/**
 * Proxy for loose.json since I think the config extension logic is expecting
 * `.js` extension, but we should keep that actual config as json.
 */
module.exports = require('./loose.json')

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

/**
 * Special syntax when the module.export is a function.  If we go to knexfile.js,
 * the module.exports is a json object with the three options of test, development, and production
 * So first, we set the environment to the NODE_ENV environment variable, and then
 * default to 'development' if no NODE_ENV is set.  Then, we set config equal to the
 * relevant environment object in knexfile.js.  Finally, we require the knex package
 * with the selected environment object set for the command line utility to run correctly.
 * 
 * If we run knex migrate:latest, it will automatically migrate the development environment
 * If we run knex migrate:latest --env test, it will migrate the test environment
 * If we run export NODE_ENV='test', and then run knex migrate:latest, it will migrate the test environment
 * If we then run unset NODE_ENV, and then run knex migrate:latest, we are back to migrating the development environment
 */
module.exports = require('knex')(config);
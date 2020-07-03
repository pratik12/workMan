/**
 * This file will contain the specifics about DB integration,
 * and db configuration.
 * This file will export the DB connection object, whihc can be imported in the project to make DB calls.
 * Providing an adapter here since we want to have freedom in our app to be able to connnected to any DB technology.
 */

 /**
  * Also ORM could be used here to make connections to the db.
  */
const db = {}
module.exports = db
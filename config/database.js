/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

'use strict'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     *
     * To use this store, uncomment the "sqlitedev" store section below, and
     * run "npm install --save waterline-sqlite3"
     */

    
     dev: {
       adapter: require('waterline-sqlite3'),
       migrate: 'alter'
     },
    /**
     * If you need to configure a mongo connection 
     * run "npm install --save sails-mongo"
    
     beta: { 
       adapter: require('sails-mongo'), 
       migrate: 'alter',
       host: 'localhost', 
       port: 27017,
       database: 'your_database_name', 
       user: 'mongo_user', 
       password: 'mongo_password
     }
     */
  },

  models: {
    defaultStore: 'dev',
    migrate: 'alter'
  }
}

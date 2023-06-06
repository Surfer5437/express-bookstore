/** Database config for database. */


const {Client} = require("pg");

const db = new Client({
    host:'localhost',
    user:'livin',
    port:'5432',
    password:'rootUser',
    database:'bookstore'
});

db.connect();

module.exports = db;



const {Client} = require("pg")
 const {DB: {DB_USER_NAME, DB_USER_PASSWORD, DB_HOST_URL}} = require("../app-config/app-config")

const client = new Client({
  user: DB_USER_NAME,
  password: DB_USER_PASSWORD,
  host: DB_HOST_URL,
  port: 5432,
})
module.exports = client;



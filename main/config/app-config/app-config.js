require("dotenv").config({ path: "./main/config/envs/.env" });

module.exports = {
    DB: {
      DB_USER_NAME: process.env.DB_USERNAME || "",
      DB_USER_PASSWORD: process.env.DB_PASSWORD || "",
      DB_HOST_URL: process.env.DB_HOST || "",
    },
    PORT: process.env.PORT
  };
  

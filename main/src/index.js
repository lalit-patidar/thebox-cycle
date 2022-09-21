const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userCrudRoutes = require("./routes/user/user-crud")
const userCreditRoutes = require("./routes/user/user-credit")
const {PORT} = require("../config/app-config/app-config");
const client = require("../config/db-setup/rds-instance");

const app = express();
const port = PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(express.json())
client.connect();

app.use(userCrudRoutes);
app.use(userCreditRoutes);


app.listen(port, () => console.log(`server is running at port ${port}`));


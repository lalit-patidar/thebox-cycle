const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userCrudRoutes = require("./routes/user/user-crud")
const userCreditRoutes = require("./routes/user/user-credit")
const { PORT } = require("../config/app-config/app-config");
const client = require("../config/db-setup/rds-instance");
const path = require("path");

const app = express();
const port = PORT || 8000;
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))
app.use(cors());
app.use(helmet());
app.use(express.json())
client.connect();

app.use(userCrudRoutes);
app.use(userCreditRoutes);
app.use((req, res) => {
    res.sendFile(`${publicDirectoryPath}/index.html`);
})

app.listen(port, () => console.log(`server is running at port ${port}`));


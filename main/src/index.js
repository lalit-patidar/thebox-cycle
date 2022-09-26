const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userCrudRoutes = require("./routes/user/user-crud")
const userCreditRoutes = require("./routes/user/user-credit")
const { PORT } = require("../config/app-config/app-config");
const client = require("../config/db-setup/rds-instance");

const app = express();
const port = PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(express.json())
client.connect();

app.use(userCrudRoutes);
app.use(userCreditRoutes);
app.use((req, res) => {
    res.status(404).send('<h1>PAGE NOT FOUND 404</h1>')
})

async function alterTable() {
    try {
        const res = await client.query(`CREATE TABLE "credit-details" (
         id SERIAL NOT NULL PRIMARY KEY,
         "nickName" varchar,
         email varchar NOT NULL,
         point integer NOT NULL,
         "totalPoint" integer NOT NULL,
         "terminalNumber" integer,
         weight varchar,
         "materialDetails" varchar,
         "createdAt" timestamp(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP),
         "updatedAt" timestamp(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP)
         );
         `)
        //    const res2 = await client.query( `ALTER TABLE "users-data" ADD CONSTRAINT "email_unique" UNIQUE ("email");`) 
        console.log(res, "thisi isisjh")
    } catch (err) {
        console.log(err, "this alter err")
    }
}

// alterTable();
app.listen(port, () => console.log(`server is running at port ${port}`));


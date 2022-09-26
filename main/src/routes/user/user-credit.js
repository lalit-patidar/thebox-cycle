const express = require("express");
const {userDeductCreditController, userUpdateCreditController, userGetCreditController, userAddCreditController} = require("../../controllers/user/user-credit")

const Route = express.Router();

Route.post("/credit/add", userAddCreditController)
Route.post("/credit/deduct", userDeductCreditController)
Route.post("/credit/update/:email", userUpdateCreditController)
Route.get("/credit/:email", userGetCreditController);

module.exports = Route;
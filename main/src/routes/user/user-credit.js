const express = require("express");
const {userDeductCreditController, userUpdateCreditController, userGetCreditController, userAddCreditController} = require("../../controllers/user/user-credit")

const Route = express.Router();

Route.post("/user/credit/add", userAddCreditController)
Route.post("/user/credit/deduct", userDeductCreditController)
Route.post("/user/credit/update", userUpdateCreditController)
Route.get("/user/credit/:mobileNumber", userGetCreditController);

module.exports = Route;
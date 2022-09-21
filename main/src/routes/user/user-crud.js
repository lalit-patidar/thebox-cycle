const express = require("express");
const {userPostController, userDeleteController, userUpdateController, userGetController, userLogoutController, userPostLoginController} = require("../../controllers/user/user-crud")

const Route = express.Router();

Route.post("/user", userPostController)
Route.post("/user/login", userPostLoginController)
Route.post("/user/logout", userLogoutController)
Route.patch("/user/update", userUpdateController)
Route.delete("/user/delete/:email", userDeleteController)
Route.get("/user", userGetController);

module.exports = Route;
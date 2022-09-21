const UserCrudServicesInstance = require("../../services/user-crud/user-crud")

const userPostController = async (req, res, next) => {
    try {
          const user = await UserCrudServicesInstance.userPostService(req.body);
          res.send(user)
    } catch(err) {
       res.send({
        status: 404,
        message: "user already exist",
        body: req.body
       });
    }
}

const userPostLoginController = async (req, res, next) => {
    try {
          const user = await UserCrudServicesInstance.userPostLoginService(req.body);
          res.send(user)
    } catch(err) {
       res.send({
        status: 400,
        message: err.message,
        body: req.body
       });
    }
}

const userLogoutController = async (req, res, next) => {
    try {
          ///logout for
    } catch(err) {
        ///errors
    }
}


const userUpdateController = async (req, res, next) => {
    try {

    } catch(err) {

    }
}


const userDeleteController = async (req, res, next) => {
    try {
       const userAddress = req.params.email;
       const serviceResponse = await UserCrudServicesInstance.userDeleteService(userAddress);
       res.send(serviceResponse)

    } catch(err) {
      res.send({
        status: 404,
        message: "user didn't exist",
        body: {email: req.params.email}
       })
    }
}

const userGetController = async (req, res, next) => {
    try {
       const users = await UserCrudServicesInstance.userGetService()
       res.send(users);
    } catch(err) {
      res.send({
        status: 400,
        message: "users not found",
        body: {}
       })
    }
}

module.exports = {
    userPostController,
    userPostLoginController,
    userUpdateController,
    userDeleteController,
    userGetController,
    userLogoutController
}

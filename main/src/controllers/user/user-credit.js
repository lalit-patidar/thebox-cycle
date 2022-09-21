const UserCreditServicesInstance = require("../../services/user-crud/user-credit")



const userAddCreditController = async (req, res, next) => {
    try {
          const user = await UserCreditServicesInstance.userAddCreditService(req.body);
          res.send(user)
    } catch(err) {
       res.send({
        status: 404,
        message: "unable to add",
        body: {}
       });
    }
}

const userDeductCreditController = async (req, res, next) => {
    try {
          const user = await UserCreditServicesInstance.userDeductCreditService(req.body);
          res.send(user)
    } catch(err) {
       res.send({
        status: 404,
        message: "unable to deduct",
        body: {}
       });
    }
}

const userUpdateCreditController = async (req, res, next) => {
    try {
          const user = await UserCreditServicesInstance.userUpdateCreditController(req.body);
          res.send(user)
    } catch(err) {
       res.send({
        status: 404,
        message: "unable to update",
        body: {}
       });
    }
}


const userGetCreditController = async (req, res, next) => {
    try {
        const userPhoneNumber = req.params.mobileNumber
        const user = await UserCreditServicesInstance.userGetCreditService(userPhoneNumber);
        res.send(user)
  } catch(err) {
     res.send({
        status: 400,
        message: "unable to fetch points",
        body: {}
       });
  }
}



module.exports = {
    userDeductCreditController, 
    userUpdateCreditController, 
    userGetCreditController,
    userAddCreditController
}

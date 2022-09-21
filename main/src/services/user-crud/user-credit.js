const client = require("../../../config/db-setup/rds-instance")



class UserCreditService {

    async userAddCreditService(body) {
        try {
            const { nickName, mobile, point, terminalNo, weight, materialDetail } = body;
            const data = await client.query(`INSERT INTO "credit" ("nickname","mobile","point","terminalNo","weight","materialDetail") VALUES ('${nickName}', '${mobile}', '${point}', '${terminalNo}', '${weight}', '${materialDetail}' );`);
            return {
                status: 201,
                message: "new user is added",
                body
            };
        } catch (err) {
            throw err;
        }
    }



    async userDeductCreditService(email) {
        try {
           //user credit
        } catch (err) {
            throw err;
        }
    }


    async   userUpdateCreditController(body) {
        try {

        } catch (err) {

        }
    }


    async userGetCreditService(phoneNumber) {
        try {
           const response = await client.query(`SELECT * FROM "credit" WHERE mobile='${phoneNumber}'`);
             let totalCreditPoints = 0;
              response.rows.forEach(item => {
                totalCreditPoints += parseInt(item.point)
              })
           return {
            status: 200,
            message: "Total credit points",
            body: {
                totalCreditPoints
            }
           }
        } catch (err) {
         throw err;
        }
    }
}

const UserCreditServicesInstance = new UserCreditService();
module.exports = UserCreditServicesInstance;
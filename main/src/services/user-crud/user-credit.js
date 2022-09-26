const client = require("../../../config/db-setup/rds-instance")



class UserCreditService {

    async userAddCreditService(body) {
        try {
            const { nickName, email, point, terminalNo, weight, materialDetail } = body;
            const updatedRow = await client.query(`SELECT * FROM "credit-details" WHERE email='${email}' ORDER BY "updatedAt" DESC LIMIT 1;`)
            let totalPoints = updatedRow.rows[0].totalPoint + point;
            const data = await client.query(`INSERT INTO "credit-details" ("nickName","email","point","totalPoint","terminalNumber","weight","materialDetails") VALUES ('${nickName}', '${email}', '${point}','${totalPoints}', '${terminalNo}', '${weight}', '${materialDetail}' );`);
            return {
                status: 201,
                message: "new credit points is added",
                body: {email, totalPoints}
            };
        } catch (err) {
            throw err;
        }
    }



    async userDeductCreditService({email, deductPoints}) {
        try {
            const updatedRow = await client.query(`SELECT * FROM "credit-details" WHERE email='${email}' ORDER BY "updatedAt" DESC LIMIT 1;`);
           let leftPoints = updatedRow.rows[0].totalPoint - deductPoints;
           await client.query(`UPDATE "credit-details" SET "totalPoint"=${leftPoints} WHERE id=${updatedRow.rows[0].id};`)
           return {
            status: 200,
            message: "deduct successfully",
            body: {
                dectedPoints: deductPoints,
                email
            }
           }
        } catch (err) {
            throw err;
        }
    }


    async   userUpdateCreditController(body) {
        try {
           
        } catch (err) {

        }
    }


    async userGetCreditService(email) {
        try {
            const updatedRow = await client.query(`SELECT * FROM "credit-details" WHERE email='${email}' ORDER BY "updatedAt" DESC LIMIT 1;`);
           return {
            status: 200,
            message: "Total credit points",
            body: {
                totalCreditPoints: updatedRow.rows[0].totalPoint
            }
           }
        } catch (err) {
         throw err;
        }
    }
}

const UserCreditServicesInstance = new UserCreditService();
module.exports = UserCreditServicesInstance;
const client = require("../../../config/db-setup/rds-instance")

class UserCrudServices {
    async userPostService(body) {
        const { firstName, lastName, email, password, phoneNumber, state, authOptionId } = body;
        try {
            const data = await client.query(`INSERT INTO "users" ("firstName","lastName","email","password","phoneNumber","roleId","state","authOptionId") VALUES ('${firstName}', '${lastName}', '${email}','${password}', '${phoneNumber}', '1', '${state}','${authOptionId}');`);
            await client.query(`INSERT INTO "credit-details" ("nickName","email","point","totalPoint","terminalNumber","weight","materialDetails") VALUES ('${firstName}', '${email}', '2000','2000', '1', '0kg', 'default' );`)
            return {
                status: 201,
                message: "new user is added",
                body: {
                    ...body,
                    point: 2000
                }
            };
        } catch (err) {
            throw err;
        }
    }

    async userPostLoginService(body) {
        try {
            const { email, password} = body;
            const data = await client.query(`SELECT * FROM "users" WHERE email='${email}' AND password='${password}'`);
            if(!data.rows.length) throw new Error("user not found")
            return {
                status: 201,
                message: "login sccess",
                body: data.rows[0]
            };
        } catch (err) {
            throw err;
        }
    }


    async userUpdateService(body) {
        try {
          //for update user
        } catch (err) {

        }
    }


    async userDeleteService(email) {
        try {
           const response = await client.query(`DELETE FROM "users" WHERE email='${email}'`);
           return {
            status: 200,
            message: "User has been deleted sucessfully",
            body: {
                email
            }
           }
        } catch (err) {
         throw err;
        }
    }

    async userGetService() {
        try {
            client.query(`SELECT * FROM "users"`, (err, data) => {
                if (err) {
                    return err
                }
                client.end()
                return data;
            })

        } catch (err) {
            throw err
        }
    }
}

const UserCrudServicesInstance = new UserCrudServices();
module.exports = UserCrudServicesInstance;
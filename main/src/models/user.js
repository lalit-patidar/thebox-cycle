const Sequelize = require('sequelize')

const setupSchema = async (sequelize) => {
    
const User =  await sequelize.define('user', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    lastName: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    email: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: "_"
    },
    roleId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },

    state: {
        type: Sequelize.STRING,
        defaultValue: "active",
    },

    authOptionId: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },

     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
})

await User.sync();

return User
}


module.exports = setupSchema;
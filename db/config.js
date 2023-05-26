const { Sequelize } = require("sequelize");

const connection = new Sequelize("test123", "anas", "123", {
    dialect: "mssql",
    port: "54752",
    host: "127.0.0.1",
    logging: false,
    dialectOptions: {
        options: { requestTimeout: 300000 },
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 5000,
        idle: 10000,
    },
    // synchronize:true
});

module.exports = connection;
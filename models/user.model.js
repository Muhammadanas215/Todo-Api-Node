const { DataTypes } = require('sequelize');
const db = require('../db/config');
const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    }
    ,
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }

},
    {
        timestamps: true,
        tableName: 'User'
    }
);

db.sync().then().catch(err=>{
    console.log(err)
})



module.exports = User
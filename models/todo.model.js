const { DataTypes } = require('sequelize');
const db = require('../db/config');
const Todo = db.define('todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    task: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true
    }
  

},
    {
        timestamps: true,
        tableName: 'todo'
    }
);

db.sync().then().catch(err=>{
    console.log(err)
})



module.exports = Todo
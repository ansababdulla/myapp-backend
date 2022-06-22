module.exports = (sequelize, type) => {
    return sequelize.define('order', {
        id : {
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        date : type.STRING,
        name : type.STRING,
        shipTo : type.STRING,
        paymentMethod : type.STRING,
        saleAmount : type.INTEGER
    }, {
        timestamps : false,
        freezeTableName: true
    })
}
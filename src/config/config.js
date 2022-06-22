var credentials = require('./constants.json');
var {Sequelize} = require('sequelize');


class ConfigConnection {

    constructor() {
        // console.log(credentials);
    };

    connectpostgresSql = () => {
        this.sequelize  = new Sequelize(credentials.db.database, credentials.db.username, credentials.db.password, {
            host : credentials.db.host,
            dialect : 'postgres',
            operatorsAliases: true,
            timestamps : false,
            pool: {
                max: 1,
                min: 0,
                acquire: 30000,
                idle: 10000,
                handleDisconnects: true
            },
        });
        this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection establised succesfully");
            })
            .catch(err => {
                console.log("unable to connect to database", err);
            });

        return this.sequelize;
    }
}

module.exports = ConfigConnection;
var models = require('../../../models/index');



class Service {
    constructor() {
        this.dbInstance = models.sequelize;
        this.user = models.user;
    }

    loginUser = (params) => {
        return new Promise((resolve, reject) => {
            let condition = {};
            const Op = models.sequelize.Op;
            condition.email = params.email;
            condition.password = params.password;
            this.user.findOne({
                attributes : ['id', 'email', 'password'],
                where : condition
            }).then((res) => {
                if(res && res.id && res.email && res.password) {
                    return resolve({
                        status : "success",
                        userid : res.id
                    });
                } else {
                    return resolve({
                        description : "please check your username or password"
                    })
                }
            });
        });
    }

    addUser = (params) => {
        return new Promise((resolve, reject) => {
            let userDetails = {
                name : params.name,
                email : params.email,
                password : params.password
            };

            this.user.create(userDetails).then((userDetails) => {
                if(userDetails && userDetails.id) {
                    resolve({
                        status : "success",
                        userId : userDetails.id
                    });
                } else {
                    resolve({
                        description : "something went wrong"
                    });
                }
            })
        }
    )}
}

module.exports = Service;
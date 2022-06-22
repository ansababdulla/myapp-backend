var Service = require('../service/index');


class AuthenticateUser {
    loginUser = (req, res) => {
        new Service().loginUser(req.body).then(result => {
            if(result.status == "success") {
                res.json({
                    status : "success",
                    userid : result.userid
                });
            } else {
                res.json({
                    status : "failed",
                    message : result.description
                });
            }
        });
    }

    addUser = (req, res) => {
        new Service().addUser(req.body).then(result => {
            if(result.status == "success") {
                res.json({
                    status : "success",
                    userid : result.userId
                })
            } else {
                res.json({
                    status : "something went wrong"
                });
            }
        })
    }
}

module.exports = AuthenticateUser;
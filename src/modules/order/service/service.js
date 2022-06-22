var model = require('../../../models/index');

class Service {
    constructor() {
        this.dbInstance = model.sequelize;
        this.order = model.order;
    }

    createOrder = (params) => {
        return new Promise((resolve, reject) => {
            var orderDetails = {};
            if(params.name && params.date && params.shipTo && params.paymentMethod && params.saleAmount) {
                orderDetails = {
                    name : params.name,
                    date : params.date,
                    shipTo : params.shipTo,
                    paymentMethod : params.shipTo,
                    saleAmount : params.saleAmount
                };

                this.order.create(orderDetails).then(orderDetails => {
                    if(orderDetails && orderDetails.id) {
                        resolve({
                            status : "success",
                            orderId : orderDetails.id
                        })
                    } else {
                        resolve ({
                            status : "failed"
                        })
                    }
                }).catch(err => {
                    reject(err);
                });
            } else {
                resolve({
                    status : "please pass all values"
                })
            }
        })
    }

    getAllOrders = () => {
        return new Promise((resolve, reject) => {
            this.order.findAll({
                attributes:['id', "name", "date", "shipTo", "paymentMethod", "saleAmount"]
            }).then((result) => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Service;
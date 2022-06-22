 var Service = require('../service/service');


 class OrderManagement {

    createOrder = (req, res) => {
        new Service().createOrder(req.body).then((result) => {
            res.json({
                status : result.status,
                orderId : result.orderId
            });
        })
    }

    getAllOrders = (req, res) => {
        new Service().getAllOrders().then((result) => {
            console.log(result);
            res.send(result);
        });
    }
}

 module.exports = OrderManagement;
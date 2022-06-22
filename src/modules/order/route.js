var { Router } = require('express');
var OrderManagement = require('./controller/orderManagement');

const routes = new Router();
const order = new OrderManagement();

routes.post('/createOrder', order.createOrder);
routes.get('/getAllOrders', order.getAllOrders);

module.exports = routes;


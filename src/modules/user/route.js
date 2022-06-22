var { Router } = require('express');
var AuthenticateUser = require('./controller/authenticateUser');

const user = new AuthenticateUser();
const routes = new Router();


routes.post('/login', user.loginUser);
routes.post('/addUser', user.addUser);

module.exports = routes;
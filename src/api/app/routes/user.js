const express = require('express'),
    UserController = require('../controllers/user');


module.exports = (app) => {
    const commonProductsRoutes = express.Router();


    commonProductsRoutes.get('/users', UserController.getAll);
    commonProductsRoutes.get('/users/:id', UserController.getById);

    commonProductsRoutes.post('/users/create', UserController.new);

    commonProductsRoutes.get('/users/:id/edit', UserController.edit);
    commonProductsRoutes.post('/users/:id/update', UserController.edit);
    commonProductsRoutes.post('/users/:follow/addFollow/:followers/:add', UserController.addFollower);

    commonProductsRoutes.get('/users/:id/delete', UserController.deleteById);

    app.use('/', commonProductsRoutes);


};
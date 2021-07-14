const express = require('express'),
    UserController = require('../controllers/publication');


module.exports = (app) => {
    const commonProductsRoutes = express.Router();


    commonProductsRoutes.get('/users', UserController.getAll);
    commonProductsRoutes.get('/users/:id', UserController.getById);

    commonProductsRoutes.post('/users/create', UserController.new);

    commonProductsRoutes.get('/users/:id/edit', UserController.edit);
    commonProductsRoutes.post('/users/:id/update', UserController.edit);

    commonProductsRoutes.get('/users/:id/delete', UserController.deleteById);

    app.use('/api', commonProductsRoutes);


};
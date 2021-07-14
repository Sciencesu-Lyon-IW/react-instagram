const express = require('express'),
    PublicationController = require('../controllers/publication');


module.exports = (app) => {
    const commonProductsRoutes = express.Router();


    commonProductsRoutes.get('/publications', PublicationController.getAll);
    commonProductsRoutes.get('/publications/:id', PublicationController.getById);

    commonProductsRoutes.post('/publications/create', PublicationController.new);

    commonProductsRoutes.get('/publications/:id/edit', PublicationController.edit);
    commonProductsRoutes.post('/publications/:id/update', PublicationController.edit);

    commonProductsRoutes.get('/publications/:id/delete', PublicationController.deleteById);

    app.use('/api', commonProductsRoutes);


};
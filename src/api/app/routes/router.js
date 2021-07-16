require('dotenv').config();

module.exports = (app) => {




// Define default routes
    app.get('/toto', (req, res, next) => {
        return res.status(200).json({msgError:"OK !"});
    });


// Define default route
    app.get('/errors', (req, res, next) => {
            return res
                .status(404)
                .json({err: 'Ressource introuvable'})
    });

    app.use((req, res, next) => {
        return res.redirect('/publications');
    });
}
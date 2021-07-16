require('dotenv').config();

module.exports = (app) => {


    require('./publications')(app)


// Define default route
    app.get('/errors', (req, res, next) => {
        if (req.originalUrl.includes(process.env.API_PATH)) {
            return res
                .status(404)
                .json({err: 'Ressource introuvable'})
        }
        return res.render('errors');
    });

    app.use((req, res, next) => {
        return res.redirect('/publications');
    });

}
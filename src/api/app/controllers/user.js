const User = require('../models/user');

/**
 * Method used for retrieve all the users
 * @param req
 * @param res
 * @param next
 */
exports.getAll = (req,res,next) => {

    User
        .find()
        .limit(5)
        .populate('creatorId')
        .exec((err, users) => {

            if(err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.render('users/index', {users});
        });

};

/**
 * Method used for retrieve an user by his id
 * @param req
 * @param res
 * @param next
 */
exports.getById = (req, res, next) => {

    if (req.path.includes('new') || req.path.includes('edit') || req.path.includes('delete')) {
        return next();
    }

    User
        .findById(req.params.id)
        .populate('creatorId')
        .exec((err, user) => {
            if(err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.render('users/single', {user});
        });

};

/**
 * Method used for add a new user or show the new page
 * @param req
 * @param res
 * @param next
 */
exports.new = (req, res, next) => {

    if(req.method === 'POST') {

                new User(req.body).save((err, user) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }

                    return res.redirect('/users');
                });


    }
    else {
        res.render('users/new');
    }

};

/**
 * Method used for update an user or retrieve the user to edit and display it
 * @param req
 * @param res
 * @param next
 */
exports.edit = (req, res, next) => {

    if(req.method === 'POST') {
        User
            .findByIdAndUpdate(req.params.id, req.body, {new: true})
            .exec((err, user) => {

                if(err) {
                    console.error(err);
                    return res.redirect('/errors');
                }

                return res.redirect('/users');

            });
    }
    else {
        User
            .findById(req.params.id)
            .exec((err, user) => {
                return res.render('users/edit', {user});
            });
    }

};

/**
 * Method used for delete an user by his id
 * @param req
 * @param res
 * @param next
 */
exports.deleteById = (req, res, next) => {

    User
        .findByIdAndDelete(req.params.id)
        .exec((err, user) => {
            if (err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.redirect('/users');
        });

};
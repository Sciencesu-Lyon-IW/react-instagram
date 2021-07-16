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

            return res.status(200).json({users});
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

            return res.status(200).json({user});
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

                    return res.status(200).json(user);
                });


    }
    else {
        console.log('impossible');
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

                return res.status(200).json({user});

            });
    }
    else {
        //pass
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

            return res.status(200).json(user);
        });

};





/**
 * Method used for update an publication or retrieve the publication to edit and display it
 * @param req
 * @param res
 * @param next
 */
exports.addFollower = (req, res, next) => {

    if(req.method === 'POST') {
        if(req.params.add === "false"){
            User
                .update( { _id: req.params.followers }, { $pull: { "follows": req.params.follow } } )
                .exec((err, user) => {

                    if (err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });

//.update( { _id: req.params.follow }, { $pull: { "followers": req.params.followers } } )



                    return res.status(200).json({user2});


        } else {
            User
                .updateOne( { _id: req.params.followers }, { $push: { "follows": req.params.follow } } )
               //.update({ _id: req.params.follow }, { $pull: { "followers": req.params.followers } } )
                .exec((err, user) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });


                return res.status(200).json({user});

        }
    }
    else {
        console.log('test');
    }

};

/**
 * Method used for update an publication or retrieve the publication to edit and display it
 * @param req
 * @param res
 * @param next
 */
exports.addFollower = (req, res, next) => {

    if(req.method === 'POST') {
        if(req.params.add === "false"){
            User
                .updateOne( { _id: req.params.followers }, { $pull: { "follows": req.params.follow } } )
                .exec((err, user) => {

                    if (err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });

            User
                .updateOne( { _id: req.params.follow }, { $pull: { "followers": req.params.followers } } )
                .exec((err, user) => {

                    if (err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });

//.update( { _id: req.params.follow }, { $pull: { "followers": req.params.followers } } )



            return res.status(200).json("ok");


        } else {
            User
                .updateOne( { _id: req.params.followers }, { $push: { "follows": req.params.follow } } )
                //.update({ _id: req.params.follow }, { $pull: { "followers": req.params.followers } } )
                .exec((err, user) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });
            User
                .updateOne( { _id: req.params.follow }, { $push: { "followers": req.params.followers } } )
                .exec((err, user) => {

                    if (err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                });

            console.log(req.params)
            return res.status(200).json("ok");

        }
    }
    else {
        console.log('test');
    }

};

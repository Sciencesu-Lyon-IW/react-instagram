const Publication = require('../models/publication');

/**
 * Method used for retrieve all the publications
 * @param req
 * @param res
 * @param next
 */
exports.getAll = (req,res,next) => {

    Publication
        .find()
        .limit(5)
        .populate('creatorId')
        .exec((err, publications) => {

            if(err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.status(200).json({publications});
        });

};

/**
 * Method used for retrieve an publication by his id
 * @param req
 * @param res
 * @param next
 */
exports.getById = (req, res, next) => {

    if (req.path.includes('new') || req.path.includes('edit') || req.path.includes('delete')) {
        return next();
    }

    Publication
        .findById(req.params.id)
        .populate('creatorId')
        .exec((err, publication) => {
            if(err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.status(200).json(publication);
        });

};

/**
 * Method used for add a new publication or show the new page
 * @param req
 * @param res
 * @param next
 */
exports.new = (req, res, next) => {

    if(req.method === 'POST') {

        // Retrieve the user in DB for add his id to the publication
        const User = require('../models/user');
        User
            .find()
            .exec((err, users) => {

                if(err) {
                    console.error(err);
                    return res.redirect('/errors');
                }
                console.log(req.body);
                req.body.creatorId = users[0]._id;
                req.body.likes.creatorId = users[0]._id;


                new Publication(req.body).save((err, publication) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }

                    return res.status(200).json({publication});
                });

            });
    }
    else {
        console.log('impossible');
    }

};

/**
 * Method used for update an publication or retrieve the publication to edit and display it
 * @param req
 * @param res
 * @param next
 */
exports.edit = (req, res, next) => {

    if(req.method === 'POST') {
        Publication
            .findByIdAndUpdate(req.params.id, req.body, {new: true})
            .exec((err, publication) => {

                if(err) {
                    console.error(err);
                    return res.redirect('/errors');
                }

                return res.status(200).json({publication});

            });
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
exports.addLike = (req, res, next) => {

    if(req.method === 'POST') {
        if(req.params.liked === "false"){
            Publication
                .update( { _id: req.params.id }, { $pull: { "likes": req.params.likes } } )
                .exec((err, publication) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }

                    return res.status(200).json({publication});

                });
        } else {

            Publication
                .update( { _id: req.params.id }, { $push: { "likes": req.params.likes } } )
                .exec((err, publication) => {

                    if(err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }

                    return res.status(200).json({publication});

                });
        }
    }
    else {
        console.log('test');
    }

};


/**
 * Method used for delete an publication by his id
 * @param req
 * @param res
 * @param next
 */
exports.deleteById = (req, res, next) => {

    Publication
        .findByIdAndDelete(req.params.id)
        .exec((err, publication) => {
            if (err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.status(200).json({publication});
        });

};

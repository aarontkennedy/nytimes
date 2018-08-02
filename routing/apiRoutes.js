module.exports = function (app) {

    // Require all models
    const db = require("../models");

    app.post("/api/user", function (req, res) {
        console.log(req.body);
        db.User.findOneAndUpdate({ googleID: req.body.googleID },
            {
                googleID: req.body.googleID,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                imageURL: req.body.imageURL
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )
            .then(function (dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });

    // POST route for saving a new articles to the db and associating it with a user
    app.post("/api/user/article", function (req, res) {
        console.log(req.body);
        db.Article.findOneAndUpdate({ url: req.body.url },
            {
                url: req.body.url,
                title: req.body.title,
                datePublished: req.body.datePublished,
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )
            // If an Article was created successfully, find the user and push the new Article's _id to the Users's `Articles` array
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            .then(function (dbArticle) {
                return db.User.findOneAndUpdate({}, { $push: { articles: dbArticle._id } }, { new: true });
            })
            .then(function (dbUser) {
                // If updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });

    // DELETE https://stackoverflow.com/questions/14763721/mongoose-delete-array-element-in-document-and-save  
    // don't delete articles, just their references in the array

    // gets user and all their articles
    app.get("/api/user/:googleID", function (req, res) {
        db.User.findOne({ googleID: req.params.googleID })
            .populate('articles').
            exec(function (err, user) {
                if (err) {
                    return res.json(err);
                }
                console.log(user);
                return res.json(user);
            });
    });
};

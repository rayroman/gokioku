/**
 * Created by rroman681 on 6/19/17.
 * Allow database access
 */

const express = require("express"),
    path = require("path");

const router = express.Router();

const routerWithDB = (db, collection) => {
    const coll = db.collection(collection);

    // get all documents
    router
        .get(`/${collection}`, (req, res) => {
            coll.find({})
                .toArray()
                .then(docs => {
                    if (docs.length === 0) {
                        res.status(404).send("Resource not found!");
                    } else {
                        res.status(200).json(docs);
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log(err.message);
                        res.status(500).send("Something went wrong!");
                    }
                });
        })
        .get(`/${collection}/:diff`, (req, res) => {
            coll.findOne({setting: req.params.diff})
                .then(doc => {
                    if (!doc) {
                        res.status(404).send("Resource not found!");
                    } else {
                        res.status(200).json(doc);
                    }
                })
                .catch(err => {
                    if (err) {
                        console.log(err.message);
                        res.status(500).send("Something went wrong!");
                    }
                });
        });
    return router;
};

module.exports = routerWithDB;
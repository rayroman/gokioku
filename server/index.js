/**
 * Created by rroman681 on 6/19/17.
 * Go between API and front end
 */

const express = require("express"),
    path = require("path"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    MongoClient = require("mongodb").MongoClient,
    url = process.env.MONGODB_URI;

const routerWithDB = require("./routes");

const app = express();

// serve static files for the React app
app
    .use(express.static(path.join(__dirname, "../build")))
    .use(cors())
    .use(bodyParser.json());

MongoClient.connect(url)
    .then(db => {
        console.log("Connected to the MongoDB database");

        // Use router
        app.use("/api/", routerWithDB(db, "difficulty"));

        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../build/index.html"));
        });

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`API listening on port ${port}`);
        });
    })
    .catch(err => {
        if (err) {
            console.log(err.message);
            process.exit(1); // quit process
        }
    });

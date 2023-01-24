
"use strict";

const express = require("express");
const path = require("path");
const homepageRouter = express.Router();

// Define home page routes
homepageRouter.get("/", (req, res) => {
    
    res.sendFile(path.join(__dirname,"../../views", "index.html"));
});

homepageRouter.get("/home", (req, res) => {
   
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

module.exports = homepageRouter;
/**
 * server.js
 * 
 * @author 
 * @since 
 */
"use strict";

const express = require("express");

const path = require("path");






const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


app.use(express.urlencoded({ extended: false }));

app.use(express.json()); // will use at the end 


app.use("/static", express.static(path.join(__dirname, "static-resources")));

const homepageRoutes = require("./routes/home/public");
const tenantRouter = require("./routes/registerRoute/tenantRoute") ;


app.use("/", homepageRoutes);

app.use("/",tenantRouter) ;






const PORT_NUMBER=9090;

app.listen(PORT_NUMBER, () => {
    console.log(`Web Application Server started successfully.\nListening on ${PORT_NUMBER}.`);
    console.log(`To access the homepage, open a browser window and visit http://localhost:${PORT_NUMBER}/`);
});
